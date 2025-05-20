import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t text-sm py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/cookie-consent"
            className="hover:underline transition text-[#037c92] font-kodchasan hover:text-[#f7941c]"
          >
            Cookie Policy
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:underline text-[#037c92] font-kodchasan hover:text-[#f7941c] transition"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="flex gap-4 items-center mt-4 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/shirinhajiesmaeili/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f7941c] transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/ShirinHajiesmaeili"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f7941c] transition"
          >
            <FaGithub size={20} />
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} iTiN. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
