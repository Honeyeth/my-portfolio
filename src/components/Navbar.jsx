import React, { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Portfolio", "Contact"];

  // scroll detect karo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-transparent border-none"
          : "bg-gray-900 border-b border-gray-700"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo - sirf scroll na hone par */}
        {!isScrolled && (
          <div className="flex items-center space-x-2">
            <FaLaptopCode className="text-blue-400 text-xl drop-shadow-sm" />
            <h1 className="text-lg md:text-xl font-bold font-poppins bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text drop-shadow-md m-0">
              MyPortfolio
            </h1>
          </div>
        )}

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex items-center font-poppins text-sm text-gray-200 transition-all duration-500 ${
            isScrolled
              ? "mx-auto bg-gray-900 px-6 py-2 rounded-full shadow-lg border border-gray-700 space-x-6"
              : "space-x-6"
          }`}
        >
          {links.map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 text-2xl focus:outline-none transition-transform duration-300 transform hover:scale-110"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 backdrop-blur-md px-6 pb-4 pt-2 space-y-3 text-gray-200 font-poppins text-sm border-t border-gray-700">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
