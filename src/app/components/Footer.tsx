"use client";


import React from 'react';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      img: "/assets/git.svg",
      link: "github.com/guidonunes",
    },
    {
      id: 3,
      img: "/assets/link.svg",
      link: "www.linkedin.com/in/guilhermednunes",
    },
  ];

  const { t } = useTranslation();

  return (
    <footer className="w-full pt-24 pb-16 mt-20 sm:pt-32 sm:pb-20 sm:mt-24 md:pt-44 md:pb-24 md:mt-28  text-black dark:text-gray-200" id="contact">
      {/* Main Content */}
      <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center">
          {t("footerTitle")}
        </h1>
        <p className=" text-gray-600 dark:text-gray-300 max-w-2xl mt-5 sm:mt-6 md:mt-10 text-center text-sm sm:text-base md:text-lg">
          {t("footerDescription")}
        </p>
        <a href="mailto:guilherme.augd@gmail.com" className="mt-8 sm:mt-10 md:mt-12">
          <button className="bg-indigo-700 dark:bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 dark:hover:bg-indigo-200 active:scale-95">
            {t("footerButton")}
          </button>
        </a>
      </div>

      {/* Social Media and Copyright Section */}
      <div className="flex flex-col items-center mt-12 sm:mt-16 md:mt-20 space-y-4 px-4 sm:px-6 lg:px-8 ">
        {/* Social Media Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={`https://${profile.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200"
            >
              <img src={profile.img} alt={profile.link} width={32} height={32} />
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className=" text-gray-600 dark:text-gray-300 max-w-2xl">
          Copyright © 2025 Guilherme
        </p>
      </div>
    </footer>
  );
};

export default Footer;
