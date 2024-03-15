import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { categoryData } from "../constants/menuinfo";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const category = categoryData;

  const variants = {
    initial: {
      opacity: 0,
      x: -100, // Initial position off-screen to the left
    },
    animate: {
      opacity: 1,
      x: 0, // Slides in to the center
      transition: {
        duration: 0.5, // Adjust the duration as needed
        ease: "easeInOut", // Add easing if desired
      },
    },
    exit: {
      opacity: 0,
      x: 100, // Exits off-screen to the right
      transition: {
        duration: 0.5, // Adjust the duration as needed
        ease: "easeInOut", // Add easing if desired
      },
    },
  };


  const transition = { duration: 0.3 }; // Adjust the duration as needed

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % category.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + category.length) % category.length);
  };

  return (
    <div className=" relative w-full flex justify-center items-center">
      <div className="px-5 text-2xl hover:scale-125 hover:text-accent-color transition duration-300 ease-out delay-150">
        <button
          onClick={handlePrev}
          disabled={currentImage === 0}
          className={currentImage === 0 ? "opacity-40" : ""}
        >
          <BiLeftArrow />
        </button>
      </div>
      <div className="flex gap-6 md:gap-12 justify-center items-center overflow-hidden">
        {[
          currentImage,
          (currentImage + 1) % category.length,
          (currentImage + 2) % category.length,
        ].map((index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="full md:w-[294px] lg:w-[220px] h-[320px] flex flex-col justify-center  items-center my-5"
          >
            <img
              src={category[index].img}
              alt={`Image ${index}`}
              className=" object-cover w-full h-full mx-auto"
            />
            <span className="w-full text-center text-lg font-semibold bg-gray-500/20 shadow-lg shadow-accent-color/30">
              {category[index].name}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="px-5 text-2xl hover:scale-125 hover:text-accent-color transition duration-300 ease-out delay-150">
        <button
          onClick={handleNext}
          disabled={currentImage >= category.length - 3}
          className={currentImage >= category.length - 3 ? "opacity-40" : ""}
        >
          <BiRightArrow />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
