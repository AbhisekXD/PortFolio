import React from "react";
import ProjectCard from "./ProjectCard";
import airlineImg from "../../assets/airline.webp";
import projectimg from "../../assets/project_management.png";


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-center font-bold">Projects</h1>

      <div className="py-12 px-4 flex flex-wrap justify-center gap-8">
        <ProjectCard
          title="Airline Reservation System"
          main="This is a blogging website created in Next.js and used a component library."
          image={airlineImg}
        />
        <ProjectCard
          title="YouTube Clone"
          main="A YouTube-like clone with video playback, search, and channel features."
          image={projectimg}
        />
        <ProjectCard
          title="Netflix Clone"
          main="A Netflix-style streaming UI built in React/Next.js using APIs."
          image={projectimg}
        />
      </div>
    </div>
  );
};

export default Projects;
