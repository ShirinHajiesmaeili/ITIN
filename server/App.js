// Load environment variables
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// POST route to send email
app.post("/send-email", (req, res) => {
  if (process.env.NODE_ENV !== "production") {
    console.log("Received request body:", req.body);
  }
  const { firstName, lastName, company, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log("Setting up mail options...");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from ${firstName} ${lastName}`,
    text: `Company: ${company}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  console.log("Sending email...");

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      return res.status(500).send("Error sending email");
    }
    console.log("Email sent successfully:", info.response);
    res.status(200).send("Email sent successfully");
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
