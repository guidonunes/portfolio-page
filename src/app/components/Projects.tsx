import React from "react";
import { Carousel } from "./ui/carousel"; // Adjust the path to where carousel.tsx is located

const Projects = () => {
  const projectSlides = [
    {
      title: "Project One",
      button: "View Details",
      src: "/assets/test.jpg", // Replace with your actual image paths
    },
    {
      title: "Project Two",
      button: "View Details",
      src: "/assets/test.jpg",
    },
    {
      title: "Project Three",
      button: "View Details",
      src: "/assets/test.jpg",
    },
  ];

  return (
    <div className="projects-section min-h-screen w-full overflow-x-hidden flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 pb-24 sm:pb-28 md:pb-32">
      {/* Header and short text */}
      <header className="text-center mb-8 sm:mb-12 pt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
          Featured Projects
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore some of our recent projects showcasing innovative designs and exceptional functionality.
          Click on the cards to learn more about each project.
        </p>
      </header>

      {/* Carousel */}
      <div className="w-full max-w-full overflow-hidden">
        <Carousel slides={projectSlides} />
      </div>
    </div>
  );
};

export default Projects;
