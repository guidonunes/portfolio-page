import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  // Define project data directly in the component
  const projects = [
    {
      id: 1,
      title: "Portfolio Pilot",
      des: "Description for Project One. This project showcases innovative design and functionality.",
      img: "/assets/pilot.png", // Replace with actual image path
      iconLists: ["/assets/rails.svg", "/assets/ruby.svg", "/assets/js.svg","/assets/postgres.svg", "/assets/sass.svg", "/assets/heroku.svg"], // Replace with actual icon paths
      link: "https://project1.com", // Replace with actual link
    },
    {
      id: 2,
      title: "Fictional E-Commerce",
      des: "Description for Project Two. This project highlights exceptional user experience and performance.",
      img: "/assets/silk.png", // Replace with actual image path
      iconLists: ["/assets/rails.svg", "/assets/ruby.svg", "/assets/js.svg","/assets/postgres.svg", "/assets/sass.svg", "/assets/heroku.svg"], // Replace with actual icon paths
      link: "https://project2.com", // Replace with actual link
    },
    {
      id: 3,
      title: "Project Three",
      des: "Description for Project Three. This project demonstrates cutting-edge technology and creativity.",
      img: "/assets/project3.jpg", // Replace with actual image path
      iconLists: ["/icons/javascript.svg", "/icons/css.svg", "/icons/html.svg"], // Replace with actual icon paths
      link: "https://project3.com", // Replace with actual link
    },
  ];

  return (
    <div id="projects">
      {/* Centered h1 with color scheme */}
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold leading-tight text-center text-black dark:text-gray-200 py-16">
        A Small Selection of Recent Projects
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-10 gap-y-24 md:gap-y-2 mt-10  text-black dark:text-gray-200">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]"></div>
                  <div>
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 w-full h-full object-cover opacity-90 rounded-2xl"
                  />
                </div>
                <h2 className="font-bold lg:2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h2>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img
                          src={icon}
                          alt={icon}
                          className="p-1 w-8 h-8"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs">Github</p>
                    <FaLocationArrow
                      className="ms-3 text-sm  text-black dark:text-gray-200"

                    />
                  </div>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
