import { Link } from "react-router-dom";
import Me from "../assets/Me.jpg";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import BackgroundColour from "../components/BackgroundColour.jsx";

const About = () => {
  return (
    <motion.div
      className="relative min-h-screen bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <BackgroundColour />
      <Navbar />

      <motion.section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center gap-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Picture */}
        <motion.div
          className="w-64 sm:w-72 md:w-80 h-96 rounded-xl overflow-hidden border-4 border-[#f7941c] shadow-2xl transition-transform hover:scale-105 duration-500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Me}
            alt="Your profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="w-full md:w-2/3 text-justify space-y-6 font-kodchasan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-3xl text-[#037c92] mb-4 font-semibold tracking-wide">
            Meet Shirin 🍬
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Dorood bar Shoma! 👋
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            I’m Shirin Hajiesmaeili — an architecture graduate turned full-stack
            developer, with a passion for thoughtful design and digital
            innovation. Born in Iran and trained in Berlin, I bring a
            cross-cultural perspective and a strong curiosity to everything I
            do. My journey into tech wasn’t planned. I studied Architecture and
            earned my bachelor’s degree, but I felt the urge to explore
            something new — to challenge myself. Like many others, I became
            curious about the world of IT. At first, I wasn’t convinced IT was
            for me — but once I stepped in, I found myself completely drawn to
            it.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            I completed a Full-Stack Web & App Development bootcamp at WBS
            Coding School in Berlin. After that, I expanded my skills with React
            Native and Figma courses on Udemy. Now, I combine code and
            creativity to help individuals and businesses transform their
            digital presence with purpose and impact. I believe that everyone
            has their own unique path — mine is a blend of structure, story, and
            a constant love for learning.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            To reflect that, I created{" "}
            <span className="font-semibold text-[#f7941c]">iTin</span> — my
            personal brand. The name is a fusion:{" "}
            <span className="font-semibold text-[#f7941c]">“IT”</span> for the
            digital world I’ve grown to love, and the last two letters,{" "}
            <span className="font-semibold text-[#f7941c]">“IN”</span>, drawn
            from <span className="font-semibold text-[#f7941c]">Berlin</span>,
            my second home. The logo is inspired by two iconic towers that
            represent who I am: the{" "}
            <span className="font-semibold text-[#f7941c]">
              Shahyad Tower in Tehran
            </span>{" "}
            — where I was born — and the{" "}
            <span className="font-semibold text-[#f7941c]">
              TV Tower in Berlin
            </span>{" "}
            — where I live and create. iTin is more than just a brand. It’s a
            reflection of cultural roots, digital transformation, and the bridge
            between two worlds.
          </p>
        </motion.div>
      </motion.section>

      {/* Back to Home Button */}
      <div className="text-center mt-6 mb-8 flex justify-center items-center font-kodchasan">
        <Link
          to="/"
          className="fancy-button text-[#037c92] hover:text-[#f7941c] transition-all duration-300 transform hover:rotate-180"
        >
          <span>Back to Home 🏠</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default About;
