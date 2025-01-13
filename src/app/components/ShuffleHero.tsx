"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const ShuffleHero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section w-full px-4 py-6 md:py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-6 max-w-6xl mx-auto text-black">
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <span className="block mb-3 text-xs md:text-sm text-indigo-700 font-medium">
          {t("tagline")}
        </span>
        <h3 className="text-4xl sm:text-5xl md:text-5xl font-semibold leading-tight">
          {t("greeting")}
        </h3>
        <h5 className="text-2xl sm:text-xl md:text-2xl text-slate-700 my-3 md:my-5 pb-4">
          {t("subtitle")}
        </h5>
        <button className="bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95 mb-4">
          {t("buttonText")}
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, src: "/assets/Java.jpeg" },
  { id: 2, src: "/assets/Figma.png" },
  { id: 3, src: "/assets/Git.jpg" },
  { id: 4, src: "/assets/JS.png" },
  { id: 5, src: "/assets/Mongo.png" },
  { id: 6, src: "/assets/Next.png" },
  { id: 7, src: "/assets/Postgres.png" },
  { id: 8, src: "/assets/Postman.png" },
  { id: 9, src: "/assets/Python.jpg" },
  { id: 10, src: "/assets/Rails.png" },
  { id: 11, src: "/assets/React.png" },
  { id: 12, src: "/assets/Sass.png" },
  { id: 13, src: "/assets/Tailwind.png" },
  { id: 14, src: "/assets/Ubuntu.png" },
  { id: 15, src: "/assets/Sharp.png" },
  { id: 16, src: "/assets/TS.png" },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 grid-rows-4 sm:h-[600px] h-[400px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
