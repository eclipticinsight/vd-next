const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // ========================================
    // ✅ BASIC INFO
    // ========================================
    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    blocked: {
      type: Boolean,
      default: false,
    },


    // ========================================
    // ✅ PROFILE DETAILS
    // ========================================
    firstName: {
      type: String,
      default: "",
    },

    lastName: {
      type: String,
      default: "",
    },

    gender: {
      type: String,
      default: "",
    },

    dob: {
      type: String,
      default: "",
    },


    // ========================================
    // ✅ CONTACT DETAILS
    // ========================================
    mobile: {
      type: String,
      default: "",
    },

    timezone: {
      type: String,
      default: "",
    },


    // ========================================
    // ✅ COMPANY DETAILS
    // ========================================
    companyName: {
      type: String,
      default: "",
      required: false,
    },

    designation: {
      type: String,
      default: "",
    },

    industry: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },


    // ========================================
    // ✅ ADDRESS DETAILS
    // ========================================
    address: {
      type: String,
      default: "",
    },

    state: {
      type: String,
      default: "",
    },

    country: {
      type: String,
      default: "",
    },

    postalCode: {
      type: String,
      default: "",
    },


    // ========================================
    // ✅ SOCIAL LINKS
    // ========================================
    instagram: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    twitter: {
      type: String,
      default: "",
    },


    // ========================================
    // ✅ PROFILE IMAGES
    // ========================================
    avatar: {
      type: String,
      default: "",
    },

    coverImage: {
      type: String,
      default: "",
    },


    // ========================================
    // ✅ SUBSCRIPTION
    // ========================================
    subscriptionPlan: {
      type: String,
      default: "",
    },

    subscriptionStatus: {
      type: String,
      default: "inactive",
    },

    subscriptionStartDate: {
      type: Date,
    },

    subscriptionEndDate: {
      type: Date,
    },


    // ========================================
    // ✅ ACCOUNT STATUS
    // ========================================
    isVerified: {
      type: Boolean,
      default: false,
    },

    lastLogin: {
      type: Date,
    },

    resetCode: {
      type: String,
      default: "",
    },

    resetCodeExpires: {
      type: Date,
    },

    verificationCode: {
      type: String,
      default: "",
    },

    verificationCodeExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);