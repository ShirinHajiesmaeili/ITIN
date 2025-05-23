import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import itinLogo from "../assets/itin.png";
import BackgroundColour from "../components/BackgroundColour.jsx";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <BackgroundColour />

      {/* Full-Screen Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <img
          src={itinLogo}
          alt="I Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Text and Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-20 absolute bottom-12 sm:bottom-20 w-full px-6"
      >
        <motion.h1
          className="text-sm sm:text-lg font-medium max-w-xl mx-auto text-center text-gray-600"
          style={{ fontFamily: "kodchasan" }}
        >
          Crafting seamless web and mobile experiences with full-stack
          development, React Native, and Figma—shaped by my architectural
          approach to design and structure.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 flex justify-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#037c92] hover:bg-[#aae3fa] transition-colors shadow-lg text-[#f7941c] font-semibold"
            style={{ fontFamily: "kodchasan" }}
          >
            Explore Now <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
