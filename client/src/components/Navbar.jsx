import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import itinLogo from "../assets/itin.png"; // adjust the path if needed

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 sticky top-0 z-50">
      <Link to="/">
        <img
          src={itinLogo}
          alt="ITin Logo"
          className="h-20 w-auto transition-transform hover:scale-105"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-[#037c92] font-medium font-kodchasan transition-all items-center">
        <li className="group">
          <Link
            to="/"
            className="text-lg transition-transform hover:text-[#f7941c] hover:translate-x-1 flex items-center gap-2"
          >
            Home
            <motion.div
              className="w-2 h-2 rounded-full bg-[#f7941c] opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </li>
        <li className="group">
          <Link
            to="/about"
            className="text-lg transition-transform hover:text-[#f7941c] hover:translate-x-1 flex items-center gap-2"
          >
            About
            <motion.div
              className="w-2 h-2 rounded-full bg-[#f7941c] opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </li>
        <li className="group">
          <Link
            to="/projects"
            className="text-lg transition-transform hover:text-[#f7941c] hover:translate-x-1 flex items-center gap-2"
          >
            Projects
            <motion.div
              className="w-2 h-2 rounded-full bg-[#f7941c] opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </li>
        <li className="group">
          <Link
            to="/services"
            className="text-lg transition-transform hover:text-[#f7941c] hover:translate-x-1 flex items-center gap-2"
          >
            Services
            <motion.div
              className="w-2 h-2 rounded-full bg-[#f7941c] opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </li>
        <li className="group">
          <Link
            to="/contact"
            className="text-lg transition-transform hover:text-[#f7941c] hover:translate-x-1 flex items-center gap-2"
          >
            Contact
            <motion.div
              className="w-2 h-2 rounded-full bg-[#f7941c] opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </li>
      </ul>

      {/* Mobile note (optional): You can later add a hamburger menu here if needed */}
    </nav>
  );
};

export default Navbar;
