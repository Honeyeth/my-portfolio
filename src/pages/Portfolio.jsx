import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import portfolioImg from "../assets/images/portfolio.jpg";
import dashboardImg from "../assets/images/dashboard.jpg";
import todoImg from "../assets/images/todo.jpg";
import weatherImg from "../assets/images/weather.jpg";
import ecommerceImg from "../assets/images/e-commerce.jpg";
import blogImg from "../assets/images/blog.jpg";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    img: portfolioImg,
    category: "web",
  },
  {
    title: "Dashboard App",
    desc: "An interactive admin dashboard with charts, analytics, and user management.",
    tech: ["React", "Chart.js", "Tailwind"],
    img: dashboardImg,
    category: "web",
  },
  {
    title: "To-Do App",
    desc: "A simple task manager application demonstrating JavaScript fundamentals.",
    tech: ["JavaScript", "HTML", "CSS"],
    img: todoImg,
    category: "app",
  },
  {
    title: "Weather App",
    desc: "A real-time weather forecast app powered by an external API.",
    tech: ["React", "API", "CSS"],
    img: weatherImg,
    category: "app",
  },
  {
    title: "E-commerce Landing Page",
    desc: "A landing page for an e-commerce platform with Stripe integration.",
    tech: ["React", "Tailwind", "Stripe"],
    img: ecommerceImg,
    category: "graphics",
  },
  {
    title: "Blog Website",
    desc: "A responsive blog website built with Next.js and Tailwind.",
    tech: ["React", "Next.js", "Tailwind"],
    img: blogImg,
    category: "graphics",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-screen bg-white text-gray-900 py-16 px-6 md:px-20"
    >
      {/* Gradient Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-wide bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
        My Portfolio
      </h2>

      {/* Small Description */}
      <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-10">
        Here are some of my recent works showcasing web apps, UI/UX designs, and
        creative projects built with modern tools.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["all", "web", "graphics", "app"].map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            whileTap={{ scale: 0.9 }}
            className={`px-6 py-2 rounded-full text-sm font-semibold border shadow-md transition-all duration-300 ${
              filter === cat
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:shadow"
            }`}
          >
            {cat === "all"
              ? "All"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid with AnimatePresence */}
      <div className="grid md:grid-cols-2 gap-12">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: "0px 12px 30px rgba(150, 180, 250, 0.35)",
              }}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center border border-gray-200 cursor-pointer"
            >
              {/* Image */}
              <motion.img
                src={project.img}
                alt={project.title}
                className="rounded-lg object-cover w-full h-48 mb-4 shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <p className="text-xs text-gray-500 mb-4 italic">
                Tech: {project.tech.join(", ")}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <motion.a
                  href="#"
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 px-5 py-2 rounded-full text-white text-sm shadow-md transition"
                >
                  <FaExternalLinkAlt /> Live
                </motion.a>
                <motion.a
                  href="#"
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-5 py-2 rounded-full text-white text-sm shadow-md transition"
                >
                  <FaGithub /> GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ─── Divider Line (below Portfolio Section) ─── */}
      <div className="absolute bottom-0 left-16 right-16 border-b-2 border-gray-200"></div>
    </section>
  );
};

export default Portfolio;
