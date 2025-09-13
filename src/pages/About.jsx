import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

// Skills array
const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 w-16 h-16" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-16 h-16" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-16 h-16" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 w-16 h-16" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 w-16 h-16" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 w-16 h-16" /> },
];

// Tools array
const tools = [
  { name: "React", icon: <FaReact className="text-blue-400 w-14 h-14" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 w-14 h-14" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500 w-14 h-14" /> },
  { name: "Zustand", icon: <span className="text-orange-400 font-bold text-lg">Z</span> },
  { name: "GitHub", icon: <FaGithub className="text-gray-200 w-14 h-14" /> },
  { name: "API", icon: <span className="text-green-300 font-bold text-lg">API</span> },
];

const About3D = () => {
  return (
    <>
      {/* ─── About Section ─── */}
      <section
        id="about"
        className="relative w-full min-h-screen bg-white text-gray-900 py-20 px-6 md:px-20 flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Left Side: About text */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">About Me</h2>

          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Hi! I'm <span className="text-blue-500 font-semibold">Muneeb Saleem</span>,
            a passionate web developer with 4–5 months of hands-on experience in building
            modern and fully responsive web applications.
          </p>

          <p className="text-gray-700 text-lg md:text-xl mb-6">
            My core focus is working with <span className="text-blue-500 font-semibold">React</span>{" "}
            and <span className="text-cyan-500 font-semibold">Tailwind CSS</span> to create clean,
            scalable, and user-friendly interfaces. I enjoy blending creativity with logic to
            turn complex ideas into smooth and interactive digital solutions.
          </p>

          <p className="text-gray-700 text-lg md:text-xl mb-6">
            So far, I have developed portfolio websites, dashboards, and interactive apps that
            focus on both performance and design. I'm always exploring new tools and best
            practices to improve my workflow and build even better user experiences.
          </p>
        </div>

        {/* Right Side: Floating animated skill cards */}
        <div className="flex-1 grid grid-cols-3 gap-6 justify-center items-center">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -20, scale: 1.15, rotateZ: 8 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-lg cursor-pointer border border-transparent hover:shadow-xl hover:border-cyan-400"
            >
              {skill.icon}
              <span className="text-gray-800 mt-2 font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="absolute bottom-0 left-16 right-16 border-b-2 border-gray-200"></div>
      </section>

      {/* ─── Tools & Modern Connect Section ─── */}
      <section className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white py-24 px-6 md:px-20 text-center font-sans">
  {/* Heading with Gradient Text */}
  <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
    Technologies & Tools I Use
  </h2>

  {/* Description */}
  <p className="text-white/70 max-w-2xl mx-auto mb-16 text-lg md:text-xl leading-relaxed">
    I love working with modern frameworks and libraries to build fast, smooth, and interactive web applications. Hover over each tool to see a subtle lift and color highlight.
  </p>

  {/* Tools Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 mb-16">
    {tools.map((tool, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -15, scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="flex flex-col items-center gap-2 cursor-pointer p-4 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 shadow-md hover:shadow-xl transition-all duration-300"
      >
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror" }}
          className="flex items-center justify-center w-16 h-16 text-3xl text-white"
        >
          {tool.icon}
        </motion.div>
        {/* Name */}
        <span className="text-white/90 text-sm font-semibold tracking-wide hover:text-cyan-400 transition-colors duration-300">
          {tool.name}
        </span>
      </motion.div>
    ))}
  </div>

  {/* Modern Connect Text */}
  <h3 className="text-2xl md:text-3xl font-extrabold text-cyan-300 mb-4 drop-shadow-md">
    Connect With Me
  </h3>
  <p className="text-white/70 max-w-xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
    Feel free to reach out on social platforms or drop a message. I’m always excited to collaborate and share ideas.
  </p>

  {/* Social Icons */}
  <div className="flex justify-center gap-8 mt-6">
    {[
      { icon: FaLinkedin, color: "#0ea5e9", link: "#" },
      { icon: FaFacebook, color: "#3b82f6", link: "#" },
      { icon: FaTwitter, color: "#38bdf8", link: "#" },
      { icon: FaInstagram, color: "#f472b6", link: "#" },
    ].map((social, idx) => (
      <motion.a
        key={idx}
        whileHover={{ scale: 1.4, y: -5, color: social.color }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        href={social.link}
        className="text-white text-3xl drop-shadow-md"
      >
        <social.icon />
      </motion.a>
    ))}
  </div>
</section>



    </>
  );
};

export default About3D;
