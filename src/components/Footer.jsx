import { useState } from "react";
import { PiPlusLight } from "react-icons/pi";
import { BsFacebook, BsReddit, BsInstagram, BsPinterest } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { menuItems } from "../constants/menuinfo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className=" relative text-bg-accent flex flex-col items-center justify-center  w-full bg-footer-color min-h-[560px] mt-16 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center gap-4 w-full text-md font-extralight ">
        <div className="flex flex-col items-center justify-items-center">
          <h6 className="text-center  text-4xl text-rose-600 ">
            The Silk Store
          </h6>
          <span className="capitalize font-light text-xs">Elegant Fabrics</span>
        </div>
        <div>
          <ul className="flex flex-col space-y-4 ">
            <li className="cursor-pointer">Ladies</li>
            <li className="cursor-pointer">Mens</li>
            <li className="cursor-pointer">Kids</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col space-y-4">
            <li className="cursor-pointer">Ladies</li>
            <li className="cursor-pointer">Mens</li>
            <li className="cursor-pointer">Kids</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col space-y-4">
            <li className="cursor-pointer">Lifestyle</li>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Jewellery</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col space-y-4">
            <li className="cursor-pointer">Ladies</li>
            <li className="cursor-pointer">Mens</li>
            <li className="cursor-pointer">Kids</li>
          </ul>
        </div>
      </div>

      <div className="h-24 w-full flex justify-center items-center ">
        <div className="w-[80%] h-[2px] bg-bg-accent "></div>
      </div>

      <div className="w-full py-4">
        <ul className="flex w-full items-center justify-between lg:justify-evenly gap-24 text-4xl">
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsReddit />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsPinterest />
          </li>
          <li>
            <FaXTwitter />
          </li>
        </ul>
      </div>
      <button
        className="absolute bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full fixed bottom-4 right-4"
        onClick={scrollToTop}
      >
        <MdOutlineVerticalAlignTop />
      </button>
    </footer>
  );
};

export default Footer;
