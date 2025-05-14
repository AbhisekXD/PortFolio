import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex flex-wrap items-center justify-between  text-white px-6 md:px-20 py-4">
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
  <li><a href="#About" className="hover:underline">About</a></li>
  <li><a href="#Experience" className="hover:underline">Experience</a></li>
  <li><a href="#Projects" className="hover:underline">Projects</a></li>
  <li><a href="#Footer" className="hover:underline">Contact</a></li>
</ul>

    </nav>
  );
};

export default Navbar;
