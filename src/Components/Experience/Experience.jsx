import React from "react";
import { FaCss3, FaDocker, FaJava, FaJs } from "react-icons/fa";
import { FaD, FaHtml5 } from "react-icons/fa6";
import {
  SiApachekafka,
  SiFedora,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJenkins,
  SiLinux,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiSpring,
  SiSpringboot,
  SiSwagger,
  SiUbuntu,
} from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">Experience</h1>

      {/* Experience Section */}
      <div className="w-full bg-slate-950 bg-opacity-45 rounded-lg p-4 flex gap-4 items-start mb-10">
        <FaD color="#4285F4" size={50} />
        <div className="text-white">
          <h2 className="text-lg font-semibold">DISHA SYSTEMS INDIA PRIVATE LIMITED</h2>
          <p className="text-sm font-thin">Aug 2021 - Present, Hyderabad</p>
          <ul className="text-sm mt-2 list-disc list-inside space-y-1">
            <li>Work as Software Developer at Disha Systems with 3.9 years of experience</li>
            <li>Developed scalable and secure real-time applications using Java, Spring Boot, and Microservices</li>
            <li>Designed RESTful APIs using Spring MVC, documented with Swagger, and tested via Postman</li>
            <li>Implemented authentication and authorization using JWT and Spring Security</li>
            <li>Integrated Apache Kafka for asynchronous and event-driven communication</li>
            <li>Utilized Docker for containerization and deployment of applications</li>
            <li>Implemented Redis for caching and session management to improve performance</li>
            <li>Worked with MySQL and PostgreSQL databases for efficient data storage and retrieval</li>
            <li>Utilized Spring Cloud (Eureka, Gateway, Config Server) for service discovery and centralized configuration</li>
            <li>Built and managed GitHub Jenkins CI/CD pipelines on Ubuntu, automating build and deployment using Docker</li>
            <li>Collaborated in Agile teams, participating in sprint planning, standups, and retrospectives</li>
            <li>Conducted code reviews, wrote unit and integration tests to maintain high code quality</li>
            <li>Communicated with clients and stakeholders to understand requirements and deliver solutions</li>
          </ul>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6 w-full">
        {[
          
  { icon: <FaJava color="#007396" size={50} />, label: "Java" },
  { icon: <SiSpring color="#6DB33F" size={50} />, label: "Spring" },
  { icon: <SiSpringboot color="#6DB33F" size={50} />, label: "Spring Boot" },
  { icon: <SiMysql color="#4479A1" size={50} />, label: "MySQL" },
  { icon: <SiPostgresql color="#336791" size={50} />, label: "PostgreSQL" },
  { icon: <SiPostman color="#FF6C37" size={50} />, label: "Postman" },
  { icon: <SiSwagger color="#85EA2D" size={50} />, label: "Swagger" },
  { icon: <SiRedis color="#DC382D" size={50} />, label: "Redis" },
  { icon: <SiApachekafka color="#FFFF" size={50} />, label: "Kafka" },
  { icon: <SiGit color="#F05032" size={50} />, label: "Git" },
  { icon: <SiGithub color="#FFFF" size={50} />, label: "GitHub" },
  { icon: <FaDocker color="#2496ED" size={50} />, label: "Docker" },
  { icon: <SiJenkins color="#D24939" size={50} />, label: "Jenkins" },
  { icon: <SiUbuntu color="#E95420" size={50} />, label: "Ubuntu" },
  { icon: <SiFedora color="#294172" size={50} />, label: "Fedora" },
  { icon: <SiLinux color="#FCC624" size={50} />, label: "Linux" },
  { icon: <FaHtml5 color="#E34F26" size={50} />, label: "HTML" },
  { icon: <FaCss3 color="#1572B6" size={50} />, label: "CSS" },
  { icon: <SiJavascript color="#F7DF1E" size={50} />, label: "JavaScript" },
  { icon: <SiReact color="#61DAFB" size={50} />, label: "React" },


        ].map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              {tech.icon}
            </span>
            <span className="text-white mt-2 text-sm text-center">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
