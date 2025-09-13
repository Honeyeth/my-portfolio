import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-8 overflow-hidden font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Let&apos;s Talk!
            </h2>
            <h3 className="text-xl font-semibold text-blue-400 mb-2 tracking-wide">
              Contact Info
            </h3>
            <div className="h-[3px] w-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4"></div>
            <p className="mb-1">📧 muneebsaleem82@gmail.com</p>
            <p className="mb-1">📍 12 Clifton Road, Karachi, Pakistan</p>
            <p className="mb-1">📞 +92 300 1234567</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              What I Do?
            </h3>
            <div className="h-[3px] w-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white">
                  Blog / Articles
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Resources
            </h3>
            <div className="h-[3px] w-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-white">
                  Resume
                </a>
              </li>
              <li>
                <a href="#tutorials" className="hover:text-white">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Quick Links
            </h3>
            <div className="h-[3px] w-12 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        {/* Social Icons */}
<div className="mt-12">
  {/* Line upar */}
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

  <div className="flex justify-center space-x-6">
    <a
      href="https://facebook.com"
      target="_blank"
      className="hover:text-blue-500"
    >
      <FaFacebookF size={22} />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      className="hover:text-pink-500"
    >
      <FaInstagram size={22} />
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      className="hover:text-blue-400"
    >
      <FaLinkedinIn size={22} />
    </a>
    <a
      href="https://github.com/muneebsaleem"
      target="_blank"
      className="hover:text-gray-200"
    >
      <FaGithub size={22} />
    </a>
  </div>
</div>


        {/* Copyright */}
        <p className="text-center text-gray-400 mt-8 text-sm">
          © {new Date().getFullYear()} Muneeb Portfolio. All rights reserved.
        </p>
      </div>

      {/* Background Shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
