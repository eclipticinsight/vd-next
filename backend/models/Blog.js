// models/Blog.js
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    // 🔹 Basic Fields
    title: { type: String, required: true },
    slug: { type: String, unique: true },

    content: { type: String, required: true },
    category: { type: String },
    image: { type: String },

    excerpt: { type: String },

    // 🔥 SEO FIELDS (NEW)
    metaTitle: {
      type: String,
      default: "",
    },
    metaDescription: {
      type: String,
      default: "",
    },

    // 🖼 Image ALT (SEO + Accessibility)
    imageAlt: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);