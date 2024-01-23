import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductInfo } from "../../services/products";
import { FaEnvelope } from "react-icons/fa";
import { PiShoppingCartSimpleDuotone, PiEnvelopeSimpleDuotone, PiWarningCircleDuotone } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import CommentCard from "./CommentCard";
import Spinner from "../Spinner";
import { useCart } from "../../context/cartContext";

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
  const { addToCart } = useCart()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

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
  }, []);



  const handleDescription = () => {
    setDescription(!description);
  };

  return (
    <div className="w-full h-auto my-24 px-2 md:px-12">


      {loading ? <Spinner /> : (
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 place-items-center">
          <img
            src={currDisplayImg}
            alt="Product Thumbnail"
            className="w-full h-96 object-contain "
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
            <div className="w-full flex justify-center text-md items-center gap-2 py-6">
              Inclusive of all Taxes
              <span className="text-2xl font-semibold">
                $ {productInfoData.price}
              </span>
            </div>
            <button className="flex items-center justify-center gap-4 py-4 w-full bg-typography-default text-bg-accent text-xl">
              <PiEnvelopeSimpleDuotone className="text-3xl" /> Notify Me
            </button>
            <button onClick={() => addToCart(productInfoData, 1)} className="flex items-center justify-center gap-4 py-4 w-full bg-typography-default text-bg-accent text-xl">
              <PiShoppingCartSimpleDuotone className="text-3xl" /> Add to cart
            </button>
            <span className="flex gap-2 justify-start items-center text-md py-6">
              <PiWarningCircleDuotone className="text-3xl" />
              Standard Delivery in 2-7 days
            </span>
            <div className="cursor-pointer">
              <button
                onClick={handleDescription}
                className="hover:text-accent-color font-bold flex items-center justify-between py-6 px-6 w-full text-typography-default border-t-2 border-gray-400 text-xl"
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
                    className={` text-white italic tracking-wider text-sm p-2 absolute z-50 ${description ? 'transition-max-height ease-in duration-600 max-h-56' : 'max-h-0'
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
        </div>)}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center my-6">
        {loading ? <Spinner /> : (
          productInfoData.images.map((img, index) => (

            < div key={index} className={`w-full shadow-2xl p bg-opacity-30 ${currDisplayImg === img ? "bg-accent-color" : ""}`} >
              <img
                src={img}
                alt={`Product Image - ${index}`}
                onClick={() => { setCurrDisplayImg(img) }}
                className="object-cover md:object-contain transform transition-transform duration-300 hover:scale-105 h-auto md:h-48  mx-auto rounded-md shadow-md"
              />
            </div>
          ))
        )}
      </div>


      {/* Review section */}

      <div className="w-full flex flex-col items-center justify-center my-4 ">

        <h3 className="text-center text-xl font-semibold">Users Reviews</h3>

        {comments.map((com, key) => { return <CommentCard props={com} /> })}

        <h4 className="text-2xl text-center mt-24">Tell us your thoughts</h4>

        <div className="w-full px-12 my-5   flex flex-col items-center justify-center gap-4 h-auto">
          <textarea type="text" className="w-full md:w-4/6 border-2 border-gray-900 h-24  " />
          <button className="w-full  md:w-2/6 bg-typography-default text-bg-accent h-12">Add Comment</button>
        </div>


      </div>
    </div >
  );
};

export default ProductInfo;
