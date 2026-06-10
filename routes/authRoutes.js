const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../models/User");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

const router = express.Router();

// 🔑 REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, adminCode } = req.body;

const normalizedEmail = email.toLowerCase().trim();

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const role = "user";

    const user = await User.create({
      name,
      email: normalizedEmail,
      password: hashed,
      role,
    });

    res.json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
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
const { email, password } = req.body;

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

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
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

      res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
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