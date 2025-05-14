import React from "react";
import { FaDocker, FaGoogle, FaAmazon } from "react-icons/fa";
import { FaD, FaJava } from "react-icons/fa6";
import { SiApachekafka, SiMysql, SiPostgresql, SiPostman, SiRedis, SiSpring, SiSpringboot } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">Experience</h1>
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        
        {/* Left side - Company Experience */}
        <div className="w-full md:w-2/5">
          <div className="flex gap-4 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-start">
            <FaD color="#4285F4" size={50} />
            <div className="text-white">
              <h2 className="text-lg font-semibold">DISHA SYSTEMS INDIA PRIVATE LIMITED</h2>
              <p className="text-sm font-thin">Aug 2021 - Present, Hyderabad</p>
              <ul className="text-sm mt-2 list-disc list-inside">
                <li>Work as software developer</li>
                <li>Java backend developer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right side - Tech Stack Icons */}
        <div className="flex flex-wrap gap-6 md:w-3/5 justify-center md:justify-start">
          {[
            { icon: <FaJava color="#007396" size={50} />, label: "Java" },
            { icon: <SiSpring color="#6DB33F" size={50} />, label: "Spring" },
            { icon: <SiSpringboot color="#6DB33F" size={50} />, label: "Spring Boot" },
            { icon: <SiMysql color="#00758F" size={50} />, label: "MySQL" },
            { icon: <SiPostgresql color="#336791" size={50} />, label: "PostgreSQL" },
            { icon: <SiPostman color="#FF6C37" size={50} />, label: "Postman" },
            { icon: <FaDocker color="#2496ED" size={50} />, label: "Docker" },
            { icon: <SiRedis color="#DC382D" size={50} />, label: "Redis" },
            { icon: <SiApachekafka color="#FFFFFF" size={50} />, label: "Kafka" },
          ].map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                {tech.icon}
              </span>
              <span className="text-white mt-2 text-sm">{tech.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
