const axios = require("axios");
const Form = require("../models/Form");

// Create Form
exports.submitForm = async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    // ✅ 1. Save to MongoDB
    const data = await Form.create(req.body);

    // ✅ 2. Send to GHL
    let ghlStatus = "success";

    try {
      await axios.post(
        "https://rest.gohighlevel.com/v1/contacts/",
        {
          firstName: name,
          email,
          phone,
          source: "Website",
          tags: ["Website Lead"],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.GHL_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.error("GHL Error:", err &&
err.response &&
err.response.data || err.message);
      ghlStatus = "failed";
    }

    // ✅ Final response
    res.status(201).json({
      success: true,
      data,
      ghlStatus,
    });

  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};