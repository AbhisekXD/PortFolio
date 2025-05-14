import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white bg-black bg-opacity-30 shadow-xl mx-0 md:mx-20 rounded-lg px-6 py-10 md:px-20 md:py-16"
    >
      {/* Top-centered Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">About</h2>

      {/* Main content: image + text */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            className="h-64 md:h-80 object-contain"
            src={AboutImg}
            alt="About img"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 md:pl-10">
          <div className="flex gap-4 items-start md:justify-start md:ml-10">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight mt-1 pt-3">
                Software Engineer @ Disha Systems | Java, Spring Framework, Software Testing ..............................................................................................
                Software Engineer @ Disha Systems | Java, Spring Framework, Software Testing ..............................................................................................
                Software Engineer @ Disha Systems | Java, Spring Framework, Software Testing ..............................................................................................
                Software Engineer @ Disha Systems | Java, Spring Framework, Software Testing ..............................................................................................
                Software Engineer @ Disha Systems | Java, Spring Framework, Software Testing ..............................................................................................
                Software Engineer @ Disha Systems | Java, Spring Framework, Software Testing ..............................................................................................
                Software Engineer @ Disha Systems | Java, Spring Framework, Software Testing ..............................................................................................
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
