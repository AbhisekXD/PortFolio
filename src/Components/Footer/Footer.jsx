import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-between bg-[#465697] text-white p-6 md:p-12 gap-6 md:gap-12"
    >
      {/* Contact Heading Section */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-base md:text-2xl mt-2">
          Feel Free To Reach Out!
        </h3>
      </div>

      {/* Contact Links */}
      <ul className="flex flex-col gap-3 text-sm md:text-lg">
        <li className="flex items-center gap-2">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:abhiseknayak84@gmail.com"
            className="hover:underline break-all"
          >
            abhiseknayak84@gmail.com
          </a>
        </li>

        <li className="flex items-center gap-2">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/abhisekxd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline break-all"
          >
            linkedin.com/in/abhisekxd
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaGithub size={20} />
          <a
            href="https://github.com/AbhisekXD"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline break-all"
          >
            github.com/AbhisekXD
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
