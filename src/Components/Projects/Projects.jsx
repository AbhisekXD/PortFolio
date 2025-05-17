import React from "react";
import ProjectCard from "./ProjectCard";
import airlineImg from "../../assets/airline.webp";
import projectimg from "../../assets/project_management.png";
import mfdimg from "../../assets/mutual_fund.png";
import jenkin from "../../assets/jenkin.png";
import portfolio from "../../assets/portfolio.png";


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-center font-bold">Projects</h1>

      <div className="py-12 px-4 flex flex-wrap justify-center gap-8">
        <ProjectCard
          title="Airline Reservation System"
          main="Airlines Reservation System ,where an admin can add the airline details and availability and user can check tracrch airlines and much more,Tech Stack: Java (Spring Boot), React.js, MySQL, JWT, Docker, Ubuntu Full-stack system with JWT-based authentication and role-based authorization for users and admins. Designed REST APIs and managed deployment on a private Ubuntu VPS server using Docker."
          image={airlineImg}
        />
        <ProjectCard
          title="Report Management System"
          main="
           Tech Stack: Java, Spring Boot, Spring Security, JWT, MySQL.   
           Implemented a hierarchical role-based user access system, task tracking, and escalation features.
           Focused on security with Spring Security and improved error traceability and resolution.
           "
          image={projectimg}
        />
        <ProjectCard
          title="Mutual Fund Distributor Platform"
          main="Tech Stack: Java, Spring Boot, Spring Security, Docker, Jenkins Built backend APIs with secure RBAC and JWT, integrated GitHub webhook for automated CI/CD. Deployed containerized applications via Jenkins pipeline, improving deployment frequency."
          image={mfdimg}
        />
        <ProjectCard
          title="Jenkin Ci/Cd Pipeline"
          main="Deployed a springboot maven project connected with MySQL & Php Myadmin using Docker compose, Github webhook , Docker, Jenkin  CI/CD pipeline."
          image={jenkin}
        />
        <ProjectCard
          title="Portfolio in React"
          main="Created my own Port folio using Html5,vTailwind Css, JavaScript, React Js and deployed in vercel, aso made this mobile responssive and now You're looking at this portfolio now."
          image={portfolio}
        />
      </div>
    </div>
  );
};

export default Projects;
