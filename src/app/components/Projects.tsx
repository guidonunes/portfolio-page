import React from "react";
import { Carousel } from "./ui/carousel"; // Adjust the path to where carousel.tsx is located

const Projects = () => {
  const projectSlides = [
    {
      title: "Project One",
      button: "View Details",
      src: "/images/project1.jpg", // Replace with your actual image paths
    },
    {
      title: "Project Two",
      button: "View Details",
      src: "/images/project2.jpg",
    },
    {
      title: "Project Three",
      button: "View Details",
      src: "/images/project3.jpg",
    },
  ];

  return (

    <div className="projects-section min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16">
      <Carousel slides={projectSlides} />
    </div>
  );
};

export default Projects;
