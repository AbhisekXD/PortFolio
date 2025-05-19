import React from "react";

const ProjectCard = ({ title, main, image }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col items-center w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <div className="h-48 flex items-center justify-center bg-transparent rounded-xl">
        <img
          className="max-h-full max-w-full object-contain bg-transparent"
          src={image}
          alt={title}
        />
      </div>
      <h3 className="px-4 pt-4 text-xl md:text-2xl font-bold leading-normal text-center">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 flex-1 text-center">
        {main}
      </p>
    </div>
    
  );
};

export default ProjectCard;
