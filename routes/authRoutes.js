const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const crypto = require("crypto");

const User = require("../models/User");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const SystemConfig = require("../models/SystemConfig");

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
    const { firstName, lastName, companyName, name, email, password, adminCode } = req.body;

    const normalizedEmail = email.toLowerCase().trim();

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const nameVal = name || `${firstName || ""} ${lastName || ""}`.trim();
    if (!nameVal) {
      return res.status(400).json({ message: "Name is required" });
    }

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const role = "user";

    const user = await User.create({
      name: nameVal,
      firstName: firstName || "",
      lastName: lastName || "",
      companyName: companyName || "",
      email: normalizedEmail,
      password: hashed,
      role,
    });

    res.json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        firstName: user.firstName,
        lastName: user.lastName,
        companyName: user.companyName,
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

module.exports = router;