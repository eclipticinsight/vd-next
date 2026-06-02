const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

const User = require("../models/User");
const protect = require("../middleware/auth");


// ========================================
// ✅ GET PROFILE
// ========================================
router.get("/profile", protect, async (req, res) => {
  try {

    const user = await User.findById(req.user.id)
      .select("-password -__v");

    res.json(user);

  } catch (error) {

    console.error("Profile Fetch Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});


// ========================================
// ✅ UPDATE PROFILE
// ========================================
router.put(
  "/update-profile",

  protect,

  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),

async (req, res) => {

  try {
    let avatar = null;
let coverImage = null;

// Avatar upload
if (req.files && req.files.avatar) {

  avatar =
    `/uploads/${req.files.avatar[0].originalname}`;

}

// Cover image upload
if (req.files && req.files.coverImage) {

  coverImage =
    `/uploads/${req.files.coverImage[0].originalname}`;

}

    // ✅ SAFE FIELDS ONLY
    const allowedUpdates = {

      firstName: req.body.firstName,
      lastName: req.body.lastName,
       avatar,
coverImage,
      gender: req.body.gender,
      dob: req.body.dob,

      mobile: req.body.mobile,

      companyName: req.body.companyName,
      designation: req.body.designation,
      industry: req.body.industry,
      website: req.body.website,

      address: req.body.address,
      state: req.body.state,
      country: req.body.country,
      postalCode: req.body.postalCode,

      instagram: req.body.instagram,
      facebook: req.body.facebook,
      linkedin: req.body.linkedin,
      twitter: req.body.twitter,

      timezone: req.body.timezone,
    };

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      allowedUpdates,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password -__v");

    res.json(updatedUser);

  } catch (error) {

    console.error("Update Profile Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});


// ========================================
// ✅ GET ALL USERS (ADMIN)
// ========================================
router.get("/all-users", protect, async (req, res) => {
  try {

    // ✅ ADMIN CHECK
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    const users = await User.find()
      .select("-password -__v")
      .sort({ createdAt: -1 });

    res.json(users);

  } catch (error) {

    console.error("Get Users Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});


// ========================================
// ✅ GET SINGLE USER
// ========================================
router.get("/:id", protect, async (req, res) => {
  try {

    // ✅ ADMIN CHECK
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    const user = await User.findById(req.params.id)
      .select("-password -__v");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);

  } catch (error) {

    console.error("Get User Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});


// ========================================
// ✅ ADMIN UPDATE USER
// ========================================
router.put("/admin-update/:id", protect, async (req, res) => {
  try {

    // ✅ ADMIN CHECK
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password -__v");

    res.json(updatedUser);

  } catch (error) {

    console.error("Admin Update Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});


// ========================================
// ✅ BLOCK / UNBLOCK USER
// ========================================
router.put("/block/:id", protect, async (req, res) => {
  try {

    // ✅ ADMIN CHECK
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // ✅ TOGGLE BLOCK STATUS
    user.blocked = !user.blocked;

    await user.save();

    res.json({
      success: true,
      blocked: user.blocked,
    });

  } catch (error) {

    console.error("Block User Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});


// ========================================
// ✅ DELETE USER
// ========================================
router.delete("/:id", protect, async (req, res) => {
  try {

    // ✅ ADMIN CHECK
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "User deleted successfully",
    });

  } catch (error) {

    console.error("Delete User Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});


// ========================================
// ✅ EXPORT ROUTER
// ========================================
module.exports = router;