import React from "react";
import avatarImg from "../../assets/profile-pic.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl -tracking-normal pt-5">
          {/* Software Developer @ Disha systems | Java, Spring Boot, Micro Services. */}
          A software Developer with 4.1 years of experience in building
          scalable, secure, and high-performance applications using Java,
          Spring Boot, and Microservices.
        </p>
        <button
          className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => document.getElementById('Footer').scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Me
        </button>
      </div>
      <div className="flex justify-center md:justify-end items-center md:w-2/4 mt-10 md:mt-0"> {/* Adjust layout for mobile and desktop */}
        <img
          className="w-40 h-40 md:w-80 md:h-80 object-contain rounded-full border-4 border-white" // Make the image bigger on desktop
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
