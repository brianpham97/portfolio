import React from "react";
import { project_data } from "./project-data";

const Projects = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  let projectData = project_data.map((project, i) => {
    return (
      <div
        key={project.name}
        className="w-full flex flex-col mb-20 gap-4 sm:flex-row"
      >
        <div className="group relative cursor-pointer overflow-hidden rounded-2xl sm:w-[60%]">
          <div className="h-80 w-full">
            <img className="h-full w-full object-cover" src={project.image} />
          </div>
          {project.tech_stack}
        </div>

        {i % 2 === 0 ? (
          <div
            className={`w-full h-32 rounded-2xl border-t-2 border-blue-400 shadow-md shadow-blue-400 cursor-pointer sm:m-auto sm:w-[40%] hover:scale-[102%]`}
          >
            <h2 className="text-2xl text-white text-center mt-2">
              {project.name}
            </h2>
            <p className="text-gray-500 ml-2 px-2">{project.description}</p>
          </div>
        ) : (
          <div
            className={`w-full h-32 rounded-2xl border-t-2 border-purple-800 shadow-md shadow-purple-800 cursor-pointer sm:m-auto sm:w-[40%] hover:scale-[102%]`}
          >
            <h2 className="text-2xl text-white text-center mt-2">
              {project.name}
            </h2>
            <p className="text-gray-500 ml-2 px-2">{project.description}</p>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900">
      <div className=" max-w-screen-lg h-full mx-auto pt-9">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-2 items-center text-center pt-2 px-6 mx-2 sm: m-0">
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800 py-2">
              Projects.
            </h1>
            <p className="text-gray-500 py-2">
              These are applications I have built with the technologies I am
              fundamentally strong in. My front end stacks consist of
              Javascript/Typescript, React, HTML, CSS and I am slowly learning
              Tailwind to integrate into my current and future applications. My
              back end stacks consist of NodeJS/Express, PostgreSQL, MySQL,
              MongoDB, Typescript. I hope you enjoy what you see below ~
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-32"></div>
      <div className="max-w-screen-lg mx-auto p-2">{projectData}</div>
    </div>
  );
};

export default Projects;
