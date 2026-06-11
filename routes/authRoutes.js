const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const crypto = require("crypto");

const User = require("../models/User");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const SystemConfig = require("../models/SystemConfig");
const sendEmail = require("../config/mailer");

const router = express.Router();

// Helper to get or generate RSA Key Pair from Database
async function getRSAKeyPair() {
  try {
    let config = await SystemConfig.findOne({ key: "rsa_key_pair" });
    if (!config) {
      const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
          type: "spki",
          format: "pem",
        },
        privateKeyEncoding: {
          type: "pkcs8",
          format: "pem",
        },
      });
      config = await SystemConfig.create({
        key: "rsa_key_pair",
        value: { publicKey, privateKey },
      });
    }
    return config.value;
  } catch (err) {
    console.error("Failed to retrieve or generate RSA Key Pair:", err);
    throw err;
  }
}

// 🔑 GET RSA PUBLIC KEY
router.get("/public-key", async (req, res) => {
  try {
    const keys = await getRSAKeyPair();
    res.json({ publicKey: keys.publicKey });
  } catch (err) {
    console.error("Public key fetch error:", err);
    res.status(500).json({ message: "Failed to load public key" });
  }
});


// 🔑 REGISTER
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, companyName, mobile, name, email, password, adminCode } = req.body;

    const normalizedEmail = email.toLowerCase().trim();

    if (!firstName || !firstName.trim()) {
      return res.status(400).json({ message: "First name is required" });
    }

    if (!lastName || !lastName.trim()) {
      return res.status(400).json({ message: "Last name is required" });
    }

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const nameVal = name || `${firstName || ""} ${lastName || ""}`.trim();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: nameVal,
      firstName: firstName || "",
      lastName: lastName || "",
      companyName: companyName || "",
      mobile: mobile || "",
      email: normalizedEmail,
      password: hashed,
      role,
      isVerified: true, // Auto-verified temporarily
    });

    res.json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        firstName: user.firstName,
        lastName: user.lastName,
        companyName: user.companyName,
        mobile: user.mobile,
        email: user.email,
        role: user.role,
      },
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔐 LOGIN
router.post("/login", async (req, res) => {
  try {
    const { encryptedData } = req.body;
    if (!encryptedData) {
      return res.status(400).json({ message: "Login payload is missing encrypted data" });
    }

    // Decrypt RSA payload
    const keys = await getRSAKeyPair();
    let decryptedData;
    try {
      const buffer = Buffer.from(encryptedData, "base64");
      const decrypted = crypto.privateDecrypt(
        {
          key: keys.privateKey,
          padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
          oaepHash: "sha256",
        },
        buffer
      );
      decryptedData = JSON.parse(decrypted.toString("utf8"));
    } catch (decryptErr) {
      console.error("RSA Decryption failed:", decryptErr);
      return res.status(400).json({ message: "Invalid encrypted login payload" });
    }

    const { email, password } = decryptedData;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Temporarily disable unverified account checks for testing
    /*
    if (!user.isVerified) {
      return res.status(401).json({
        message: "Email not verified. Please verify your email before logging in.",
        unverified: true,
        email: user.email,
      });
    }
    */

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const isProduction = process.env.NODE_ENV === "production" || !!process.env.WEBSITE_INSTANCE_ID;

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 👥 GET ALL USERS (ADMIN ONLY)
router.get("/users", auth, roleMiddleware("admin"), async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.error("GET USERS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 👥 GET USER COUNT (ADMIN ONLY)
router.get("/users/count", auth, roleMiddleware("admin"), async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: "Error fetching count" });
  }
});

// 🔴 GOOGLE LOGIN
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// 🔴 GOOGLE CALLBACK
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    try {
      const token = jwt.sign(
        { id: req.user._id, role: req.user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      const FRONTEND_URL =
        process.env.FRONTEND_URL || "http://localhost:5173";

      const isProduction = process.env.NODE_ENV === "production" || !!process.env.WEBSITE_INSTANCE_ID;

      res.cookie("token", token, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });

res.redirect(`${FRONTEND_URL}/dashboard`);
    } catch (err) {
      console.error("GOOGLE CALLBACK ERROR:", err);
      res.status(500).json({ message: "Google login failed" });
    }
  }
);

// 🔐 ADMIN TEST
router.get("/admin", auth, roleMiddleware("admin"), (req, res) => {
  res.json({ message: "Admin only access" });
});

// 🔑 FORGOT PASSWORD (Request Reset Code)
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).json({ message: "No account found with this email" });
    }

    // Generate a 6-digit random verification code
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    const resetCodeExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes validity

    user.resetCode = resetCode;
    user.resetCodeExpires = resetCodeExpires;
    await user.save();

    // Log code to server console for testing/development
    console.log(`[PASSWORD RESET CODE] Email: ${normalizedEmail} | Code: ${resetCode}`);

    // Generate HTML for email
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #4f46e5; text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Visionary Dynamics</h2>
        <p style="color: #374151; font-size: 16px; line-height: 24px;">Hello,</p>
        <p style="color: #374151; font-size: 16px; line-height: 24px;">You requested a password reset for your account. Please use the following 6-digit verification code to complete the reset process:</p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; font-size: 24px; font-weight: bold; letter-spacing: 4px; padding: 12px 24px; background-color: #f3f4f6; border: 1px solid #d1d5db; border-radius: 8px; font-family: monospace; color: #1f2937;">
            ${resetCode}
          </span>
        </div>
        <p style="color: #4b5563; font-size: 14px; line-height: 20px;">This code is valid for 15 minutes. If you did not request this, you can safely ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
        <p style="font-size: 12px; color: #9ca3af; text-align: center;">&copy; 2026 Visionary Dynamics. All rights reserved.</p>
      </div>
    `;

    try {
      await sendEmail({
        to: normalizedEmail,
        subject: "Password Reset Verification Code - Visionary Dynamics",
        html: emailHtml,
      });
    } catch (mailErr) {
      console.error("Nodemailer failed to transmit reset email. Please ensure SMTP env variables are configured in .env:", mailErr.message);
    }

    res.json({
      message: "Reset code generated and sent",
      email: normalizedEmail,
    });
  } catch (err) {
    console.error("FORGOT PASSWORD ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔑 VERIFY RESET CODE
router.post("/verify-reset-code", async (req, res) => {
  try {
    const { email, code } = req.body;
    if (!email || !code) {
      return res.status(400).json({ message: "Email and code are required" });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).json({ message: "No account found with this email" });
    }

    if (!user.resetCode || user.resetCode !== code.trim()) {
      return res.status(400).json({ message: "Invalid reset code" });
    }

    if (new Date() > user.resetCodeExpires) {
      return res.status(400).json({ message: "Reset code has expired" });
    }

    res.json({
      success: true,
      message: "Code verified successfully",
    });
  } catch (err) {
    console.error("VERIFY RESET CODE ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔑 RESET PASSWORD
router.post("/reset-password", async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;
    if (!email || !code || !newPassword) {
      return res.status(400).json({ message: "Email, code, and new password are required" });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).json({ message: "No account found with this email" });
    }

    if (!user.resetCode || user.resetCode !== code.trim()) {
      return res.status(400).json({ message: "Invalid reset code" });
    }

    if (new Date() > user.resetCodeExpires) {
      return res.status(400).json({ message: "Reset code has expired" });
    }

    // Hash the new password
    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    
    // Clear code and expiry
    user.resetCode = "";
    user.resetCodeExpires = null;
    await user.save();

    res.json({
      success: true,
      message: "Password has been updated successfully",
    });
  } catch (err) {
    console.error("RESET PASSWORD ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔑 VERIFY SIGNUP EMAIL
router.post("/verify-email", async (req, res) => {
  try {
    const { email, code } = req.body;
    if (!email || !code) {
      return res.status(400).json({ message: "Email and verification code are required" });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).json({ message: "No user found with this email" });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "Email is already verified" });
    }

    if (!user.verificationCode || user.verificationCode !== code.trim()) {
      return res.status(400).json({ message: "Invalid verification code" });
    }

    if (new Date() > user.verificationCodeExpires) {
      return res.status(400).json({ message: "Verification code has expired" });
    }

    user.isVerified = true;
    user.verificationCode = "";
    user.verificationCodeExpires = null;
    await user.save();

    res.json({
      success: true,
      message: "Email verified successfully. You can now log in.",
    });
  } catch (err) {
    console.error("VERIFY EMAIL ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔑 RESEND VERIFICATION CODE
router.post("/resend-verification", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).json({ message: "No user found with this email" });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "Email is already verified" });
    }

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const verificationCodeExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);

    user.verificationCode = verificationCode;
    user.verificationCodeExpires = verificationCodeExpires;
    await user.save();

    // Log verification code to console for testing/development
    console.log(`[RESENT VERIFICATION CODE] Email: ${normalizedEmail} | Code: ${verificationCode}`);

    // Generate HTML for email
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #4f46e5; text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Verify Your Email</h2>
        <p style="color: #374151; font-size: 16px; line-height: 24px;">Hello ${user.firstName || ""},</p>
        <p style="color: #374151; font-size: 16px; line-height: 24px;">You requested a new verification code. Please enter the following 6-digit verification code to verify your account:</p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; font-size: 24px; font-weight: bold; letter-spacing: 4px; padding: 12px 24px; background-color: #f3f4f6; border: 1px solid #d1d5db; border-radius: 8px; font-family: monospace; color: #1f2937;">
            ${verificationCode}
          </span>
        </div>
        <p style="color: #4b5563; font-size: 14px; line-height: 20px;">This code is valid for 24 hours. If you did not request this, you can safely ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
        <p style="font-size: 12px; color: #9ca3af; text-align: center;">&copy; 2026 Visionary Dynamics. All rights reserved.</p>
      </div>
    `;

    try {
      await sendEmail({
        to: normalizedEmail,
        subject: "Verify Your Email - Visionary Dynamics",
        html: emailHtml,
      });
    } catch (mailErr) {
      console.error("Nodemailer failed to transmit verification email:", mailErr.message);
    }

    res.json({
      success: true,
      message: "New verification code sent to your email",
    });
  } catch (err) {
    console.error("RESEND VERIFICATION ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;