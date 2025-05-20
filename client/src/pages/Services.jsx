import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import BackgroundColour from "../components/BackgroundColour.jsx";

const services = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive websites with a focus on user experience. Specializing in React.js, Node.js, and SEO optimization.",
    tech: [
      "HTML5, CSS3 and Responsive Web Design",
      "Frontend Programming with JavaScript/React",
      "Backend Programming with Node.js (Express)",
      "Version Control Systems (Git & GitHub)",
      "Generative AI Integration",
      "Databases (SQL, NoSQL)",
      "Restful APIs",
      "Unit Testing",
      "Agile Tools and Methodologies",
    ],
    link: "/projects/web",
  },
  {
    title: "App Development",
    description:
      "Creating seamless mobile applications using React Native, connecting with backends to deliver smooth, fast experiences.",
    tech: [
      "React Navigation",
      "Custom UI Components",
      "API Integration",
      "Firebase Authentication",
      "Redux",
      "Device Integration",
      "App Performance Optimization",
      "Debugging Tools",
      "App Deployment",
      "React Native Development",
      "Component & State Management",
    ],
    link: "/projects/app",
  },
  {
    title: "UX/UI Design",
    description:
      "Designing beautiful, user-centric interfaces for both web and mobile apps. Expertise in Figma, accessibility, and usability principles.",
    tech: [
      "Web and Mobile Design",
      "Figma Mastery",
      "UI & UX Principles",
      "HTML & CSS",
    ],
    link: "/projects/design",
  },
];

const Services = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <BackgroundColour />
      <Navbar />

      {/* Services Content */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-[#037c92] mb-10 font-kodchasan font-semibold tracking-wide">
          My Services
        </h2>

        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto md:overflow-visible">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="flex flex-col justify-between p-6 w-full md:w-80 border-l-4 border-[#f7941c] shadow-lg rounded-3xl bg-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl min-h-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div>
                <div className="flex flex-col h-full justify-between">
                  <h3 className="text-2xl font-semibold text-[#037c92]  font-kodchasan">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 font-kodchasan mb-4 min-h-[120px]">
                    {service.description}
                  </p>

                  <div className="flex flex-col gap-2 h-40 overflow-y-auto pr-1">
                    {service.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="bg-[#037c92] text-white text-xs px-3 py-1 rounded-full font-kodchasan text-center w-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  to="/projects"
                  className="text-[#f7941c] hover:underline font-kodchasan"
                >
                  View Projects →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="text-center my-16 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl text-[#037c92] font-kodchasan mb-4 font-medium">
          Would you like to collaborate?
        </h3>
        <p className="text-lg mb-6 text-gray-600 font-kodchasan">
          I am open to new projects and collaborations. If you're interested in
          working together, feel free to reach out through the contact form
          below.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#037c92] hover:bg-[#aae3fa] transition-colors shadow-lg text-[#f7941c] font-semibold font-kodchasan"
        >
          Contact Me
        </Link>
      </section>

      {/* Back to Home Button */}
      <div className="text-center mb-10 flex justify-center items-center font-kodchasan hover:text-[#f7941c] text-[#037c92]">
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

export default Services;
