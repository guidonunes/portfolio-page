"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../theme-context";
import "../animations.css";

export const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrollingDown, setIsScrollingDown] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18next.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsScrollingDown(true); // Scrolling down
      } else {
        setIsScrollingDown(false); // Scrolling up
      }
      lastScrollY = currentScrollY; // Update the ref value
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      <nav className= {`fixed top-0  w-full  z-50 flicker-in-1 backdrop-filter backdrop-blur-lg bg-opacity-30 mb-16
          ${isScrollingDown ? "-translate-y-full" : "translate-y-0"}
        `}>
        <div className="container mx-auto">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row mx-8">
              <a href="#home" className="flex items-center">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={90}
                  height={90}
                />
              </a>

              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 dark:text-gray-400 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                aria-controls="navbar-nav-example"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-9 h-9"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className={`lg:flex ${
                isOpen ? "block" : "hidden w-full lg:flex lg:pl-11"
              }`}
              id="navbar-nav-example"
            >
              <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4">
                <li>
                  <a
                    href="#home"
                    className="flex items-center justify-between text-gray-500 dark:text-gray-300 text-sm lg:text-base font-medium hover:text-indigo-700 dark:hover:text-orange-400 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                  >
                    {t("home")}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="flex items-center justify-between text-gray-500 dark:text-gray-300 text-sm lg:text-base font-medium hover:text-indigo-700 dark:hover:text-orange-400 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                  >
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="flex items-center justify-between text-gray-500 dark:text-gray-300 text-sm lg:text-base font-medium hover:text-indigo-700 dark:hover:text-orange-400 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                  >
                    {t("projects")}
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="flex items-center justify-between text-gray-500 dark:text-gray-300 text-sm lg:text-base font-medium hover:text-indigo-700 dark:hover:text-orange-400 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                  >
                    {t("contact")}
                  </a>
                </li>

                <div className="relative">
                  <button
                    className="flex items-center p-2 px-3 border rounded-lg text-gray-500 dark:text-gray-300 text-sm "
                    onClick={toggleDropdown} // Use toggleDropdown to show/hide the dropdown
                  >
                    <Image
                      src={
                        language === "en"
                          ? "/assets/united-states.png"
                          : language === "pt"
                          ? "/assets/brazil.png"
                          : "/assets/germany.png"
                      }
                      alt={`${language} flag`}
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">
                      {language === "en"
                        ? "English"
                        : language === "pt"
                        ? "Português (Brasil)"
                        : "Deutsch"}
                    </span>
                  </button>

                  {/* Dropdown menu */}
                  {isDropdownOpen && ( // Show dropdown only if it's open
                    <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg mt-2 ">
                      <div
                        className="flex items-center p-2 cursor-pointer hover:bg-gray-100  text-gray-500 text-sm"
                        onClick={() => handleLanguageChange("pt")}
                      >
                        <Image
                          src="/assets/brazil.png"
                          alt="Brazil flag"
                          width={20}
                          height={20}
                        />
                        <span className="ml-2">Português (Brasil)</span>
                      </div>

                      <div
                        className="flex items-center p-2 cursor-pointer hover:bg-gray-100  text-gray-500 text-sm"
                        onClick={() => handleLanguageChange("en")}
                      >
                        <Image
                          src="/assets/united-states.png"
                          alt="US flag"
                          width={20}
                          height={20}
                        />
                        <span className="ml-2">English</span>
                      </div>

                      <div
                        className="flex items-center p-2 cursor-pointer hover:bg-gray-100  text-gray-500 text-sm"
                        onClick={() => handleLanguageChange("de")}
                      >
                        <Image
                          src="/assets/germany.png"
                          alt="Germany flag"
                          width={20}
                          height={20}
                        />
                        <span className="ml-2">Deutsch</span>
                      </div>
                    </div>
                  )}
                </div>

                <li>
                  <button
                    className="p-3 rounded-lg text-black dark:text-white border border-gray-200"
                    onClick={toggleTheme}
                  >
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
