import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import React, { useState } from "react";
import { categoryData } from "../constants/menuinfo";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const category = categoryData;

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % category.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + category.length) % category.length);
  };

  return (
    <div className="my-6 w-full mx-5 flex justify-center items-center">
      <div className="px-5">
        <button
          onClick={handlePrev}
          disabled={currentImage === 0}
          className={currentImage === 0 ? "opacity-40" : ""}
        >
          <BiSolidLeftArrow />
        </button>
      </div>
      <div className="flex gap-6 md:gap-12 overflow-hidden">
        {[
          currentImage,
          (currentImage + 1) % category.length,
          (currentImage + 2) % category.length,
        ].map((index) => (
          <div
            key={index}
            className="w-60 h-60 flex flex-col justify-center items-center my-5"
          >
            <img
              src={category[index].img}
              alt={`Image ${index}`}
              className="rounded-full object-cover"
            />
            <span className="text-lg font-semibold">
              {category[index].name}
            </span>
          </div>
        ))}
      </div>
      <div className="px-5">
        <button
          onClick={handleNext}
          disabled={currentImage >= category.length - 3}
          className={currentImage >= category.length - 3 ? "opacity-40" : ""}
        >
          <BiSolidRightArrow />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
