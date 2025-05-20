import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import BackgroundColour from "../components/BackgroundColour.jsx";

const projects = [
  {
    title: "Adonis digital Marketing Freelancing",
    description:
      "This is a private project for a client. I designed and developed a website for a digital marketing freelancer, focusing on user experience and conversion optimization. UX/UI design, front-end development, back-end development and SEO optimization were key aspects of this project with collabrating with the client herself because she is a digital marketing expert.",
    tech: ["JavaScript", "Figma", "Tailwind CSS", "Node.js", "React.js"],
    link: "https://adonis-digitalmarketing.com/",
  },
  {
    title: "iTiN Portfolio",
    description:
      "My personal website and brand identity project. Built with React and Framer Motion, it showcases my journey, skills, and playful UX experiments.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "UX/UI", "Node.js"],
    link: "#",
  },
];

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <BackgroundColour />

      <Navbar />

      {/* Projects Content */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl text-[#037c92] mb-10 font-kodchasan font-semibold tracking-wide">
          My Projects
        </h2>

        <div className="flex flex-col h-full justify-between gap-8 overflow-x-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="p-6 border-l-4 border-[#f7941c] shadow-xl rounded-xl bg-white transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-[#037c92] mb-2 font-kodchasan">
                {project.title}
              </h3>
              <p className="text-gray-700 font-kodchasan">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-[#037c92] text-white text-sm px-3 py-1 rounded-full font-kodchasan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#f7941c] hover:underline font-kodchasan"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="text-center mt-6 flex justify-center items-center font-kodchasan hover:text-[#f7941c] text-[#037c92]">
        <Link
          to="/"
          className="fancy-button transform hover:rotate-180 transition-all"
        >
          <span>Back to Home 🏠</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsPage;
