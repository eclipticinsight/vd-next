const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// ✅ Add feedback
router.post("/", async (req, res) => {
  try {
    const data = new Testimonial(req.body);
    await data.save();

    res.status(201).json({
      success: true,
      message: "Feedback submitted",
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get testimonials
router.get("/", async (req, res) => {
  try {
    const data = await Testimonial.find({ approved: true })
      .sort({ createdAt: -1 });

    res.json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;