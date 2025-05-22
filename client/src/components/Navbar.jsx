import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import itinLogo from "../assets/itin.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 sticky top-0 z-50 bg-white">
      {/* Logo */}
      <Link to="/">
        <img
          src={itinLogo}
          alt="ITin Logo"
          className="h-20 w-auto transition-transform hover:scale-105"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-[#037c92] font-medium font-kodchasan transition-all items-center">
        {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
          <li className="group" key={item}>
            <Link
              to={`/${item.toLowerCase()}`}
              className="text-lg transition-transform hover:text-[#f7941c] hover:translate-x-1 flex items-center gap-2"
            >
              {item}
              <motion.div
                className="w-2 h-2 rounded-full bg-[#f7941c] opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-[#037c92]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white px-8 py-4 flex flex-col gap-4 md:hidden font-kodchasan text-[#037c92] z-50 shadow-md">
          {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-base hover:text-[#f7941c] transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
