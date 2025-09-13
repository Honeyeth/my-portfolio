import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/BackgroundBeamsWithCollision";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden px-4"
    >
      {/* 🔥 Animated Beams */}
      <BackgroundBeamsWithCollision className="opacity-70" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-xl w-full text-center flex flex-col justify-between h-full py-8">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold mb-4 mt-10 tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Get in Touch
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 mb-10 text-lg leading-relaxed">
          I’d love to hear from you! Whether you’re planning a project, have a
          question, or simply want to connect, drop your details below and I’ll
          reach out as soon as possible.
        </p>

        {/* Form */}
        <form className="space-y-5 bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-600/50 mb-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-400 border border-gray-700 transition"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-400 border border-gray-700 transition"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-400 border border-gray-700 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105 transition-transform font-semibold tracking-wide shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
