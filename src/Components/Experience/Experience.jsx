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
  SiPaypal,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiSpring,
  SiSpringboot,
  SiStripe,
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
          <p className="text-sm font-thin">May 2021 - Present, Hyderabad</p>
          <ul className="text-sm mt-2 list-disc list-inside space-y-1">
            <li>Worked as a Software Developer at Disha Systems with 4.1 years of experience in designing and developing secure, scalable real-time applications using Java, Spring Boot, and Microservices architecture.</li>
            <li>Architected and maintained microservices-based applications, achieving 99.9% uptime and reducing system downtime by 40%.</li>
            <li>Designed and documented 50+ RESTful APIs using Spring MVC and Swagger; validated endpoints via Postman, reducing manual testing time by 25%.</li>
            <li>Implemented OAuth 2.0 and JWT-based authentication and authorization with Spring Security, enabling role-based access control.</li>
            <li>Integrated PayPal and Stripe for secure one-time and recurring payments, improving transaction reliability.</li>
            <li>Built asynchronous, event-driven pipelines using Apache Kafka, decoupling services and improving scalability.</li>
            <li>Accelerated data access by 40% with Redis caching for session management and frequently accessed data.</li>
            <li>Utilized Spring Cloud components (Eureka, Config Server, API Gateway) for centralized configuration and dynamic service discovery.</li>
            <li>Automated CI/CD pipelines using Jenkins and Docker on Ubuntu, reducing deployment time by 60%.</li>
            <li>Managed application deployment through Docker containerization and orchestration.</li>
            <li>Worked with relational databases like MySQL and PostgreSQL for efficient data storage and complex querying.</li>
            <li>Participated in Agile ceremonies such as sprint planning, daily standups, and retrospectives to ensure timely delivery.</li>
            <li>Conducted code reviews and developed unit/integration tests to ensure high-quality, maintainable code.</li>
            <li>Interfaced with clients and stakeholders to gather requirements and deliver end-to-end solutions.</li>

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
          { icon: <SiPaypal color="#009cde" size={50} />, label: "PayPal" },
          { icon: <SiStripe color="#635bff" size={50} />, label: "Stripe" },
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
