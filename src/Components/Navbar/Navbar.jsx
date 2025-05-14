import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex flex-wrap items-center justify-between bg-[#465697] text-white px-6 md:px-20 py-4">
      {/* Logo */}
      <span className="text-2xl font-bold tracking-wide">Portfolio</span>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`w-full md:w-auto md:flex md:items-center md:gap-6 font-semibold text-center transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } md:block mt-4 md:mt-0 bg-black md:bg-transparent bg-opacity-30 md:bg-opacity-0 p-4 md:p-0 rounded-xl md:rounded-none`}
      >
        <li className="py-1 hover:underline cursor-pointer">About</li>
        <li className="py-1 hover:underline cursor-pointer">Experience</li>
        <li className="py-1 hover:underline cursor-pointer">Projects</li>
        <li className="py-1 hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
