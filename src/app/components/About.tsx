"use client";

import { useTranslation } from "react-i18next";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiPaintBrushBroadLight } from "react-icons/pi";
import { LiaToolsSolid } from "react-icons/lia";
import { PiLightbulbThin } from "react-icons/pi";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="relative px-6 w-full py-24">

      {/* Centralized Header */}
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
        {t("about")}
      </h1>

      {/* Centralized Bio Text */}
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        {t("aboutText")}
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto pt-8">
        {/* Left Column: Skills */}
        <div className="text-center md:text-left">
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Back-End Development <VscWorkspaceTrusted className="ml-2" />
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-600 dark:text-gray-300 list-none text-justify">
              Proficient in building robust and scalable backend systems,
              specializing in Ruby on Rails, Node.js, and API development.
            </li>
            <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-200 py-6">
              Front-End Development <PiPaintBrushBroadLight className="ml-2" />
            </h2>
            <li className="text-gray-600 dark:text-gray-300 list-none text-justify">
              Experienced in crafting responsive and user-friendly interfaces,
              with expertise in React, TypeScript, and modern UI/UX design
              principles.
            </li>
          </ul>
        </div>

        {/* Center Column: Picture */}
        <div className="flex justify-center relative">
          <img
            className="absolute inset-x-0 bottom-0  mb-10 -translate-x-1/2 left-1/2 translate-y-10 z-0 w-70 h-70"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
            alt=""
          />
          <img
            src="/assets/profile.png"
            alt="Your Photo"
            className="w-70 h-70 rounded-full object-cover z-10"
          />
        </div>

        {/* Right Column: Skills */}
        <div className="text-center md:text-right">
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            <LiaToolsSolid className="mr-2" /> Full-Stack Development
          </h2>

          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-600 dark:text-gray-300 list-none text-justify">
              {" "}
              Skilled in full-stack development, with expertise in backend
              systems and frontend design, honed through the intensive Le Wagon
              bootcamp.
            </li>
            <h2 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-200 py-6 ">
              <PiLightbulbThin className="mr-2" /> Continuous Learning
            </h2>
            <li className="text-gray-600 dark:text-gray-300 list-none text-justify">
              Passionate about continuous learning, currently enrolled at FIAP
              Faculty to study Analysis and System Development, furthering my
              expertise in the tech field.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
