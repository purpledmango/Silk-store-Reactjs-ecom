import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

import {
  sortFilterData,
  sizeFilterData,
  fitFilterData,
} from "../constants/fitlersData";
const Filters = ({ products, setProducts }) => {
  const productList = products;

  const [trendSort, setTrendSort] = useState(false);
  const [trend, setTrend] = useState(null);
  const [sizeSort, setSizeSort] = useState(false);
  const [size, setSize] = useState(null);

  const handleSort = (sortType) => {
    if (sortType === sortFilterData[0]) {
      // sorting price from lowest to highest
      const productByLowestPrice = productList.sort((a, b) => {
        return a.price - b.price;
      });

      setProducts([...productByLowestPrice]);
    } else if (sortType === sortFilterData[1]) {
      // Sort products by highest to lowest
      const productByHighestPrice = productList.sort((a, b) => {
        return b.price - a.price;
      });

      setProducts([...productByHighestPrice]);
    } else if (sortType === sortFilterData[2]) {
      // Sort products by Recommended || in this case filter products with prices < 500
      const productByRecommended = productList.filter(
        (item) => item.price < 500
      );
      console.warn(productByRecommended);
      setProducts([...productByRecommended]);
    } else if (sortType === sortFilterData[3]) {
      // Sort products by Newest || in this case filter products with prices < 500
      console.log(productList);
    }
  };

  const handleSizeSort = (sortType) => {
    const allSizesData = products;

    // if (sortType === "S" {
    //   const sSizes = allSizesData.filter((item)=>{item.size === ""})
    // })
  };

  return (
    <div className="cursor-pointer w-full flex justify-center gap-4 pt-0 lg:pt-24 bg-bg-accent ">
      <div>
        <label
          className="flex justify-center items-center"
          htmlFor="dropdown"
          onClick={() => setTrendSort(!trendSort)}
        >
          <span className="font-bold">Sort by</span>
          <span className="text-2xl">
            {trendSort ? (
              <MdKeyboardArrowUp className="text-accent-color" />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </span>
        </label>
        <div className="relative ">
          <ul
            className={`absolute shadow-2xl  transition-max-h duration-300 ease-in-out z-20 ${
              trendSort ? "max-h-56" : "max-h-0"
            } bg-bg-accent overflow-hidden`}
          >
            {sortFilterData.map((item, key) => (
              <li
                onClick={() => {
                  setTrend(sortFilterData[key]);
                  handleSort(trend);
                }}
                key={key}
                className="flex gap-2 items-center px-5 py-3  hover:text-accent-color hover:font-bold overflow-x-hidden"
              >
                <div className="relative w-3 h-3 rounded-full flex items-center justify-center bg-black hover:bg-accent-color ">
                  <span
                    className={`absolute w-2 h-2 rounded-full ${
                      item === trend ? "bg-accent-color" : "bg-bg-accent"
                    }`}
                  ></span>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
