const nodemailer = require("nodemailer");

// Create SMTP mail transporter using SMTP env vars
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Send password reset email utility
 * @param {Object} options 
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject line
 * @param {string} options.html - HTML formatted email body
 */
const sendEmail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || '"Visionary Dynamics" <noreply@visionarydynamicsas.com>',
      to,
      subject,
      html,
    });
    console.log(`Email dispatched successfully. Message ID: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("Mailer sendMail invocation failed: ", error);
    throw error;
  }
};

module.exports = sendEmail;
