"use client";

import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const RecentProjects = () => {

  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Portfolio Pilot",
      des: t("projectDescription1"),
      img: "/assets/pilot.png",
      iconLists: ["/assets/rails.svg", "/assets/ruby.svg", "/assets/js.svg","/assets/postgres.svg", "/assets/sass.svg", "/assets/heroku.svg"], // Replace with actual icon paths
      link: "https://github.com/guidonunes/portfolio-pilot-rails",
    },
    {
      id: 2,
      title: t("projectTitle2"),
      des: t("projectDescription2"),
      img: "/assets/silk.png",
      iconLists: ["/assets/rails.svg", "/assets/ruby.svg", "/assets/js.svg","/assets/postgres.svg", "/assets/sass.svg", "/assets/heroku.svg"], // Replace with actual icon paths
      link: "https://github.com/guidonunes/marketplace-project",
    },
    {
      id: 3,
      title: "Todo App",
      des: t("projectDescription3"),
      img: "/assets/react-redux.png",
      iconLists: ["/assets/rea.svg", "/assets/redux.svg", "/assets/js.svg", "/assets/sass.svg", "/assets/netlify.svg"], // Replace with actual icon paths
      link: "https://journaly-brain-app.netlify.app/",
    },
  ];

  return (
    <div id="projects">
      {/* Centered h1 with color scheme */}
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold leading-tight text-center text-black dark:text-gray-200 py-16">
        {t("projectHeader")}
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
                <p className="text-left text-gray-600 dark:text-gray-300 max-w-2xl">
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
