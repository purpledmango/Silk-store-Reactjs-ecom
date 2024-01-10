import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductInfo } from "../../services/products";
import { FaEnvelope } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import CommentCard from "./CommentCard";
import Spinner from "../Spinner";

const ProductInfo = () => {
  const comments = [
    {
      name: "Ramesh",
      date: "11/12/23",
      comment: "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:object-scale-down to apply the object-scale-down utility at only medium screen sizes and above."

    },
    {
      name: "Vicky",
      date: "10/12/23",
      comment: "prefers-reduced-motion, and more. For example, use md:object-scale-down to apply the object-scale-down utility at only medium screen sizes and above."

    },
    {
      name: "Sureh",
      date: "09/12/23",
      comment: "queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:object-scale-down to apply the object-scale-down utility at only medium screen sizes and above."

    },
  ]

  const { pid } = useParams();
  const [productInfoData, setProductInfoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState(false);
  const [currDisplayImg, setCurrDisplayImg] = useState(null)
  console.log(productInfoData);
  useEffect(() => {
    const fetchedProduct = async () => {
      try {
        const product = await getProductInfo(pid);
        setProductInfoData(product);
        setCurrDisplayImg(product.thumbnail)
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchedProduct();
  }, [pid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDescription = () => {
    setDescription(!description);
  };

  return (
    <div className="w-full h-full my-24 px-2 md:px-12">
      {loading && <Spinner />}

      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 place-items-center">
        <img
          src={currDisplayImg}
          alt="Product Thumbnail"
          className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-110"
        />
        <div className="flex flex-col w-full justify-start h-full lg:w-8/12 space-y-2">
          <h1 className="text-2xl">{productInfoData.title}</h1>
          <div className="text-xl">
            {[...Array(5)].map((_, key) => {
              if (key < Math.round(productInfoData.rating)) {
                return (
                  <span key={key} className="text-gray-900">
                    &#9733;
                  </span>
                );
              } else {
                return (
                  <span key={key} className="text-gray-600">
                    &#9733;
                  </span>
                );
              }
            })}
          </div>
          <div className="flex items-center justify-start gap-3 text-lg">
            <span className="font-light text-sm">Brand</span>
            <span className="hover:underline cursor-pointer capitalize">
              {productInfoData.brand}
            </span>
          </div>
          <div className="flex items-center justify-start gap-3 text-lg">
            <span className="font-light text-sm">Category</span>
            <span className="hover:underline cursor-pointer  capitalize">
              {productInfoData.category}
            </span>
          </div>
          <div className="w-full flex justify-center items-center gap-2 py-6">
            Inclusive of all Taxes
            <span className="text-2xl">
              $ {productInfoData.price}
            </span>
          </div>
          <button className="flex items-center justify-center gap-4 py-6 w-full bg-typography-default text-bg-accent text-xl">
            <FaEnvelope /> Notify Me
          </button>
          <span className="flex gap-2 justify-start items-center text-md py-6">
            <IoIosInformationCircleOutline />
            Standard Delivery in 2-7 days
          </span>
          <div className="cursor-pointer">
            <button
              onClick={handleDescription}
              className="hover:text-accent-color font-bold flex items-center justify-between py-6 px-6 w-full text-typography-default border-t-2 border-gray-400 text-2xl"
            >
              <span
                className={`hover:text-accent-color ${description ? "text-accent-color" : "text-typography-default"
                  }`}
              >
                Description
              </span>
              {description ? <SlArrowUp /> : <SlArrowDown />}
            </button>
            <div className="relative">
              {description && (
                <div
                  className={`bg-gray-800 bg-opacity-70 text-white italic tracking-wider text-sm p-2 absolute z-50 ${description ? 'transition-max-height ease-in duration-600 max-h-56' : 'max-h-0'
                    }`}
                >
                  <p className="justify-content border-accent-color border-2 p-2">
                    {productInfoData.description}
                  </p>
                </div>

              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center">
        {productInfoData.images.map((img, index) => (
          <div key={index} className="w-full h-62 ">
            <img
              src={img}
              alt={`Product Image - ${index}`}
              onClick={() => { setCurrDisplayImg(img) }}
              className="object-cover transform transition-transform duration-300 hover:scale-110 w-full h-full mx-auto rounded-md shadow-md"
            />
          </div>
        ))}
      </div>


      {/* Review section */}

      <div className="w-full flex flex-col items-center justify-center my-4 ">

        <h3 className="text-center text-xl font-semibold">Users Reviews</h3>

        {comments.map((com, key) => { return <CommentCard props={com} /> })}

        <div className="w-full my-5">
          <input type="text" className="w-[80%] border-2 border-gray-900 p-3 " />
          <button className="">Add Comment</button>
        </div>


      </div>
    </div>
  );
};

export default ProductInfo;
