
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ cat, setCat, allCategories }) => {
  return (
    <div className="col-span-0 md:col-span-3 lg:col-span-2 hidden md:block md:h-screen mx-6">
      <h2 className="font-extrabold text-xl my-2">Categories</h2>
      <ul className="flex flex-col justify-center gap-2 px-5">
        {allCategories.map((category, key) => (
          <li
            key={key}
            onClick={() => {
              setCat(category);
            }}
            className="hover:text-orange-500 hover:underline"
          >
            <span
              className={`${category === cat ? "text-accent-color" : "text-gray-800"
                } capitalize`}
            >
              <Link to={`/products/category/${category}/`}>{category}</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
