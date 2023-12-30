/* eslint-disable react/prop-types */
import { AiFillHeart } from "react-icons/ai";
const ProductCard = ({ cart, product, key, addToCart }) => {
  return (
    <li key={key} className="">
      <div className="w-full relative z-10">
        <img
          src={product.thumbnail}
          className="object-cover w-full md:w-[294px] lg:w-[402px] h-[428px] lg:h-[620px] mx-auto"
        />

        {cart.some((cartItem) => cartItem.id === product.id) ? (
          <span
            onClick={() => addToCart(product.id)}
            className="absolute right-9 bottom-6 text-3xl"
          >
            <AiFillHeart className="transition-all hover:scale-110  text-rose-500" />
          </span>
        ) : (
          <span
            onClick={() => addToCart(product.id)}
            className="absolute right-9 bottom-6 text-3xl"
          >
            <AiFillHeart className="transition-all hover:scale-110  hover:opacity-100 text-gray-400 hover:text-rose-500" />
          </span>
        )}
      </div>
      <div className="my-4 pb-6 flex flex-col space-y-1">
        <span className="text-xs"> {product.title}</span>
        <span className="text-xs font-semibold">$ {product.price}</span>
        <div>
          {[...Array(5)].map((_, key) => {
            if (key < Math.round(product.rating)) {
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
        <span className="text-xs font-extrabold">
          Discounted Price $
          {Math.round(
            product.price - product.price * (product.discountPercentage / 100)
          )}
        </span>
      </div>
    </li>
  );
};

export default ProductCard;
