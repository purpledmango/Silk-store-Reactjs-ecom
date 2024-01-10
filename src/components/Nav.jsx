import { Link } from "react-router-dom";
import {
  menuImgs,
  leftSubItems,
  rightSubLogos,
} from "../constants/menuinfo";
import { PiDotsThreeOutline, PiXLight } from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { BsArrowRightShort } from "react-icons/bs";
import { useEffect, useState } from "react";
import Login from "./auth/Login";
import { fetchAllCategories } from "../services/products.js";

const Nav = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [triggerLogin, setTriggerLogin] = useState(false);
  const [mainMenu, setMainMenu] = useState([]);
  const [user, setUser] = useState({
    user: null,
    email: null,
    cart: [],
    wishlist: [],
  });

  const [mobSearch, setMobSearch] = useState(false);

  const mobMenuTrigger = () => {
    setMenuShow(!menuShow);
  };

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const getCategories = await fetchAllCategories();
        console.log("Fetched Data", getCategories);
        setMainMenu(getCategories);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategoryData();
  }, []);

  return (
    <nav className="w-screen h-24 bg-bg-accent text-typography-default lg:py-6">
      {/* mobileMenu */}
      <div className="block lg:hidden relative">
        {/* Hamburger Button */}
        <button
          onClick={mobMenuTrigger}
          className="flex justify-center absolute ml-5 mt-5 pt-2 text-2xl z-0"
        >
          <RxHamburgerMenu />
        </button>

        {/* Close button */}
        <button
          onClick={mobMenuTrigger}
          className={` ${menuShow ? "block" : "hidden"
            } absolute h-screen top-auto right-2  z-50 w-full`}
        >
          <div className="bg-opacity-25 bg-gray-700 w-full h-full flex items-center justify-end">
            <div className="bg-opacity-100 ">
              <RxCross1 className="rounded-full h-16 w-24 bg-red" />
            </div>
          </div>
        </button>
        <div
          className={`${menuShow ? "translate-x-0" : "-translate-x-full"
            } absolute h-screen gap-6 bg-white
        w-5/6  duration-150 transition-transform ease-in-out z-50`}
        >
          <ul className="flex flex-col w-full py-4 px-5 space-y-6">
            {mainMenu.map((item, key) => (
              <li
                key={key}
                className="w-full flex justify-between items-center hover:text-rose-600 transition-all"
              >
                <div className="flex gap-3 h-full items-center font-bold">
                  <img
                    src={menuImgs[key]}
                    className="w-16 h-16 rounded-full col-span-1"
                    alt={menuImgs[key]}
                  ></img>
                  <span>{item}</span>
                </div>
                <BsArrowRightShort className="text-xl" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* End mobileMenu */}
      {mobSearch && (
        <div className="fixed w-full top-0 z-20">
          <div className="shadow-lg 4 bg-bg-accent flex items-center text-lg px-5 gap-5">
            <TfiSearch
              className="text-2xl"
              onClick={() => setMobSearch(!mobSearch)}
            />
            <input
              placeholder="Search"
              className="w-full py-3 px-2  focus:font-bold focus:outline-none border-b-2 border-gray-700 bg-bg-accent"
            ></input>
            <PiXLight
              className="text-2xl"
              onClick={() => setMobSearch(!mobSearch)}
            />
          </div>
        </div>
      )}
      <div className="flex justify-between items-center w-full  pt-5 ">
        {/* left Nav Menu */}
        <div className="w-full lg:w-2/6 hidden lg:block">
          <ul className="flex justify-evenly items-center">
            {leftSubItems.map((item, key) => (
              <li className="text-sm hover:cursor-pointer" key={key}>
                {item}
              </li>
            ))}
            <li>
              <PiDotsThreeOutline />
            </li>
          </ul>
        </div>
        {/* Branding */}
        <div className="w-full lg:w-2/6 ">
          <div className="pl-16 flex items-center justify-center flex-col">
            <h1 className="text-left lg:text-center text-2xl lg:text-4xl text-rose-600 ">
              <Link to="/">The Silk Store</Link>
            </h1>
            <span className="capitalize font-extralight text-xs">
              Elegant Fabrics
            </span>
          </div>
        </div>
        {/* Right nav menu */}
        <div className="relative w-full lg:w-2/6 mr-8">
          <ul className="relative flex justify-end  lg:justify-evenly gap-8 lg:gap-0 items-center w-full">
            <>
              <li className="text-sm hover:cursor-pointer flex gap-2">
                <div className="text-xl">{rightSubLogos[0]}</div>
                {user?.name && (
                  <span className="hidden lg:block">{user.name}</span>
                )}
                {!user?.name && (
                  <div className="hidden lg:block">
                    <span
                      onClick={() => {
                        setTriggerLogin(!triggerLogin);
                      }}
                    >
                      Login
                    </span>
                  </div>
                )}
              </li>

              <li className="text-sm hover:cursor-pointer flex gap-2">
                <div className="text-xl">{rightSubLogos[1]}</div>
                <span className="hidden lg:block">Favourites</span>
              </li>
              <li className="block lg:hidden md:hover:cursor-pointer">
                <div className="text-xl">
                  <TfiSearch onClick={() => setMobSearch(!mobSearch)} />
                </div>
              </li>

              <li className="text-sm hover:cursor-pointer flex gap-2">
                <div className="text-xl">{rightSubLogos[2]}</div>
                {user?.cart.length ? (
                  <>
                    <span className="hidden lg:block">Shopping bag</span>(
                    {user.cart.length})
                  </>
                ) : (
                  <span className="hidden lg:block">Shopping bag (0)</span>
                )}
              </li>
            </>
          </ul>
        </div>
      </div>
      {/* Main Menu -- FOR LARGER DISPLAYS */}
      <div className="hidden md:block relative w-full pt-8 h-full  bg-bg-accent">
        <ul className="flex w-full items-center justify-center gap-12 h-8 bg-bg-accent">
          {mainMenu.slice(0, 8).map((item, key) => (
            <Link to={`products/category/${item}`} key={key}>
              <li
                className="capitalize border-box text-md font-semi-bold hover:cursor-pointer hover:border-gray-900 hover:border-b-2"
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
        {/* Search */}
        <div className="absolute right-2 bottom-3 border-gray-800 border-b-2  mr-5">
          <input
            placeholder="Search"
            name="search"
            className="bg-bg-accent pl-6 p-2 text-xs focus:font-bold focus:outline-none"
          ></input>
          <button>
            <TfiSearch className="bg-bg-accent" />
          </button>
        </div>
      </div>
      {triggerLogin && (
        <div className="relative flex justify-center w-full z-100 bg-red-500">
          <Login
            triggerLogin={triggerLogin}
            setTriggerLogin={setTriggerLogin}
          />
        </div>
      )}
    </nav>
  );
};

export default Nav;
