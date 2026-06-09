const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async function (req, res, next) {

  try {

    // ========================================
    // ✅ GET TOKEN FROM COOKIE OR AUTH HEADER
    // ========================================
    let token = req.cookies.token;
    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      }
    }

    // ❌ NO TOKEN
    if (!token) {
      return res.status(401).json({
        msg: "No token",
      });
    }

    // ========================================
    // ✅ VERIFY TOKEN
    // ========================================
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // ========================================
    // ✅ GET FULL USER
    // ========================================
    const user = await User.findById(decoded.id)
      .select("-password");

    // ❌ USER NOT FOUND
    if (!user) {
      return res.status(401).json({
        msg: "User not found",
      });
    }

    // ========================================
    // ❌ BLOCKED USER
    // ========================================
    if (user.blocked) {
      return res.status(403).json({
        msg: "Your account is blocked",
      });
    }

    // ========================================
    // ✅ SAVE FULL USER
    // ========================================
    req.user = user;

    next();

  } catch (error) {

    console.error("Auth Middleware Error:", error);

    res.status(401).json({
      msg: "Invalid token",
    });
  }
};