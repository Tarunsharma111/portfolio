import React from "react";
import project from "../assets/project/project.png";

const Project = () => {
  const Projects = [
    {
      id: 1,
      src: project,
      href: "https://github.com/Tarunsharma111/DailyNews",
    },
    {
      id: 2,
      src: project,
      href: "https://github.com/Tarunsharma111/portfolio",
    },
    {
      id: 3,
      src: project,
      href: "https://github.com/Tarunsharma111/CURD-Operation",
    },
    {
      id: 4,
      src: project,
      href: "https://github.com/Tarunsharma111/Music-app",
    },
    {
      id: 5,
      src: project,
      href: "https://github.com/Tarunsharma111/React-Dashboard",
    },
    {
      id: 6,
      src: project,
      href: "https://github.com/Tarunsharma111/Clock-project",
      demo: 'https://clock-project-eo7ds4pb3-tarunsharma111s-projects.vercel.app'
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Projects.map(({ id, src, href, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
