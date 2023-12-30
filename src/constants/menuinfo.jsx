import babyImg from "../assets/img/baby-fashion.jpg";
import kidsImg from "../assets/img/kids-fashion.jpg";
import ladiesImg from "../assets/img/ladies-fashion.jpg";
import menImg from "../assets/img/men-fashion.jpg";
import homeImg from "../assets/img/home-fashion.jpg";
import sportImg from "../assets/img/sport-fashion.jpg";
import sustainabilityImg from "../assets/img/sustainability-fashion.jpg";
import dividedImg from "../assets/img/divided-fashion.jpg";
import saleImg from "../assets/img/sale-fashion.png";

import { SlUser } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlBag } from "react-icons/sl";

export const menuItems = [
  "Ladies",
  "Men",
  "Divided",
  "Baby",
  "Kids",
  "Home",
  "Sport",
  "Sustainability",
  "Sale",
];

export const menuImgs = [
  ladiesImg,
  menImg,
  dividedImg,
  babyImg,
  kidsImg,
  homeImg,
  sportImg,
  sustainabilityImg,
  saleImg,
];
export const leftSubItems = ["Customer Service", "Newsletter", "Find a Store"];
export const rightSubLogos = [<SlUser />, <SlHeart />, <SlBag />];
export const rightSubItems = ["Sign in", "Favourites", "Shopping bag"];

export const categoryData = menuItems.map((item, key) => {
  return { name: item, img: menuImgs[key] };
});
