const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ PAYMENT MODEL
const Payment = require("../models/Payment");

// ================================
// CREATE CHECKOUT SESSION
// ================================
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { plans, userId } = req.body;

    // ✅ Validation
    if (!plans || !Array.isArray(plans)) {
      return res.status(400).json({
        error: "Invalid plans data",
      });
    }

    const line_items = plans.map((plan) => ({
      price_data: {
        currency: "usd",

        product_data: {
          name: plan.name || "Service",
        },

        unit_amount: Math.round(plan.price * 100),
      },

      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      mode: "payment",

      line_items,

      metadata: {
        userId: userId || "",
      },

      success_url:
        "https://visionarydynamicsas.com/success",

      cancel_url:
        "https://visionarydynamicsas.com/cancel",
    });

    // ✅ SAVE PAYMENT ENTRY
    await Payment.create({
      user: userId,
      amount: plans.reduce(
        (acc, item) => acc + item.price,
        0
      ),
      status: "pending",
      stripeSessionId: session.id,
    });

    res.json({
      url: session.url,
    });

  } catch (error) {
    console.error("Stripe Error:", error.message);

    res.status(500).json({
      error: error.message,
    });
  }
});

// ================================
// PAYMENT HISTORY
// ================================
router.get("/history/:userId", async (req, res) => {
  try {
    const payments = await Payment.find({
      user: req.params.userId,
    }).sort({ createdAt: -1 });

    res.json(payments);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Failed to fetch payment history",
    });
  }
});

// ================================
// GET ALL PAYMENTS
// ================================
router.get("/all", async (req, res) => {
  try {

    const payments = await Payment.find()
      .sort({ createdAt: -1 });

    res.json(payments);

  } catch (error) {

    console.error("Get Payments Error:", error);

    res.status(500).json({
      message: "Failed to fetch payments",
    });
  }
});

// ================================
// DELETE ALL PENDING PAYMENTS
// ================================
router.delete("/bulk-delete-pending", async (req, res) => {
  try {
    const result = await Payment.deleteMany({ status: "pending" });
    res.json({
      success: true,
      message: `Deleted ${result.deletedCount} pending payments`,
    });
  } catch (error) {
    console.error("Bulk Delete Pending Payments Error:", error);
    res.status(500).json({
      message: "Failed to bulk delete pending payments",
    });
  }
});

// ================================
// DELETE SINGLE PAYMENT
// ================================
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Payment.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }
    res.json({
      success: true,
      message: "Payment deleted successfully",
    });
  } catch (error) {
    console.error("Delete Payment Error:", error);
    res.status(500).json({
      message: "Failed to delete payment",
    });
  }
});

module.exports = router;