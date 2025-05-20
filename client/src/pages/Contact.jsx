import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import BackgroundColour from "../components/BackgroundColour.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Error sending email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send the message.");
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <BackgroundColour />
      <Navbar />

      <section className="max-w-4xl mx-auto py-16 px-6 sm:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl text-[#037c92] font-semibold mb-8 font-kodchasan"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#f9f9f9] p-6 sm:p-8 rounded-3xl shadow-md space-y-6 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              aria-label="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg font-kodchasan focus:outline-none focus:ring-2 focus:ring-[#037c92]"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              aria-label="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg font-kodchasan focus:outline-none focus:ring-2 focus:ring-[#037c92]"
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            aria-label="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-kodchasan focus:outline-none focus:ring-2 focus:ring-[#037c92]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-kodchasan focus:outline-none focus:ring-2 focus:ring-[#037c92]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-kodchasan focus:outline-none focus:ring-2 focus:ring-[#037c92] resize-none"
          ></textarea>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-2">
            <motion.button
              type="submit"
              className="py-3 px-6 rounded-full shadow-md bg-[#037c92] hover:bg-[#aae3fa] text-[#f7941c] font-semibold transition-all font-kodchasan"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>

            <motion.a
              href="https://wa.me/4917664171040?text=Hello%2C%20I%27m%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full shadow-md bg-[#037c92] hover:bg-[#aae3fa] text-[#f7941c] font-semibold transition-colors font-kodchasan"
              whileHover={{ scale: 1.05 }}
            >
              Message me on WhatsApp
            </motion.a>
          </div>
        </motion.form>

        <div className="text-center mt-8 flex justify-center items-center font-kodchasan hover:text-[#f7941c] text-[#037c92]">
          <Link
            to="/"
            className="fancy-button transform hover:rotate-180 transition-all"
          >
            <span>Back to Home 🏠</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
