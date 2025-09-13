import React from "react";
import profilePic from "../assets/images/muneeb.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 overflow-hidden bg-white"
    >
      {/* 🎨 Background Circles (without blur) */}
      <span className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-30"></span>
      <span className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full opacity-30"></span>

      {/* ✨ Left Side: Text */}
      <div className="flex-1 relative z-10 text-center md:text-left mt-10 md:mt-20">
        <h1 className="text-sm md:text-base font-medium text-gray-700 mb-2">
          Hey There 👋 I am
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
          Muneeb <span className="text-blue-600">Saleem</span>
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
          Professional{" "}
          <span className="text-purple-600">Web Developer</span>
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-xl mb-6">
          I craft modern and responsive web applications using React, Tailwind
          CSS, and other cutting-edge technologies. My goal is to turn ideas
          into interactive digital experiences.
        </p>

        {/* 🔘 Simple Portfolio-style Buttons (No Emoji) */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#portfolio"
            className="px-6 py-2 rounded-full font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:opacity-90 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full font-medium border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 hover:shadow-md transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* 👤 Right Side: Profile Image (Hover Effect) */}
      <div className="flex-1 relative z-10 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          src={profilePic}
          alt="Muneeb Saleem"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-500"
        />
      </div>

      {/* ─── Divider Line (below Hero Section) ─── */}
      <div className="absolute bottom-0 left-16 right-16 border-b-2 border-gray-200"></div>

      {/* ⬇️ Scroll Indicator */}
      <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="26"
          height="48"
          viewBox="0 0 24 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#4A6CF7" />
        </svg>
      </span>
    </section>
  );
};

export default Home;
