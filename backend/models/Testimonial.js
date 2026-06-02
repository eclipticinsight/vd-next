const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: String,
  message: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now },

  // ✅ optional (recommended)
  approved: { type: Boolean, default: true }
});

module.exports = mongoose.model("Testimonial", testimonialSchema);