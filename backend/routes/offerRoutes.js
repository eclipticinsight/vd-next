const express = require("express");
const router = express.Router();

const Offer = require("../models/Offer");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

// GET OFFERS
router.get("/", async (req, res) => {
  const offers = await Offer.find();
  res.json(offers);
});

// ADD OFFER (ADMIN ONLY)
router.post("/", auth, roleMiddleware("admin"), async (req, res) => {
  const offer = await Offer.create(req.body);
  res.json(offer);
});

// UPDATE OFFER
router.put("/:id", auth, roleMiddleware("admin"), async (req, res) => {
  const updated = await Offer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE OFFER
router.delete("/:id", auth, roleMiddleware("admin"), async (req, res) => {
  await Offer.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;