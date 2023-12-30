import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductInfo } from "../../services/products";
import { FaEnvelope } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import CommentCard from "./CommentCard";

const ProductInfo = () => {
  const comments = [
    {name:"Ramesh",
    date: "11/12/23",
    comment: "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:object-scale-down to apply the object-scale-down utility at only medium screen sizes and above."

  },
    {name:"Vicky",
    date: "10/12/23",
    comment: "prefers-reduced-motion, and more. For example, use md:object-scale-down to apply the object-scale-down utility at only medium screen sizes and above."

  },
    {name:"Sureh",
    date: "09/12/23",
    comment: "queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:object-scale-down to apply the object-scale-down utility at only medium screen sizes and above."

  },
  ]

  const { pid } = useParams();
  const [productInfoData, setProductInfoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState(false);
  console.log(productInfoData);
  useEffect(() => {
    const fetchedProduct = async () => {
      try {
        const product = await getProductInfo(pid);
        setProductInfoData(product);
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
      <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 place-items-center">
        <img
          src={productInfoData.thumbnail}
          alt="Product Thumbnail"
          className="w-full max-w-full h-auto"
        />
        <div className="flex flex-col w-full justify-start h-full lg:w-8/12 space-y-4">
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
          <div className="flex   items-center justify-start gap-3 text-lg">
            Brand
            <span className="font-bold underline cursor-pointer text-xl">
              {productInfoData.brand}
            </span>
          </div>
          <div className="flex   items-center justify-start gap-3 text-lg">
            Category
            <span className="font-bold underline cursor-pointer text-xl capitalize">
              {productInfoData.category}
            </span>
          </div>
          <div className="w-full flex justify-center items-center gap-2 py-6">
            Inclusive of all Taxes
            <span className="text-2xl font-extrabold">
              $ {productInfoData.price}
            </span>
          </div>
          <button className="flex items-center justify-center gap-4 py-6 w-full bg-typography-default text-bg-accent text-2xl">
            <FaEnvelope /> Notify Me
          </button>
          <span className="flex gap-2 justify-start items-center text-md py-6">
            <IoIosInformationCircleOutline />
            Standard Delivery in 2-7 days
          </span>
          <div className="cursor-pointer">
            <button
              onClick={handleDescription}
              className="hover:text-accent-color font-bold flex items-center justify-between py-6 px-6 w-full text-typography-default border-t-2 border-gray-300 text-2xl"
            >
              <span
                className={`hover:text-accent-color ${
                  description ? "text-accent-color" : "text-typography-default"
                }`}
              >
                Description
              </span>
              {description ? <SlArrowUp /> : <SlArrowDown />}
            </button>
            {description && (
              <div className=" bg-gray-200 px-5 mt-6 py-2 transform -translate-y-1/3 transition-transform duration-300">
                <p className="justify-content">
                  {productInfoData.description} lorem
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 my-24">
        {productInfoData.images.map((img, index) => (
          <div key={index} className="w-full h-auto shadow-2xl">
            <img
              src={img}
              alt={`Product Image ${index}`}
              className="object-contain w-full md:w-[294px] lg:w-[650px] h-[350px] lg:h-[520px] mx-auto"
            />
          </div>
        ))}
      </div>

      {/* Review section */}

      <div className="w-full flex flex-col items-center justify-center ">

      <h3 className="text-center text-xl font-semibold">Users Review</h3>

      {comments.map((com, key)=>{return <CommentCard props={com}/>})}

      <div className="w-full my-5">
        <input type="text" className="w-[80%] border-2 border-gray-900 p-3 "/>
        <button className="">Add Comment</button>
      </div>
      

      </div>
    </div>
  );
};

export default ProductInfo;
