/* eslint-disable react/prop-types */
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

const CartCard = ({ product, quantity }) => {
    const { addToCart, removeFromCart, cart } = useCart()


    return (
        <li className="w-full flex justify-between items-center shadow-xl p-4">
            <div className="relative h-auto  flex items-center justify-center">
                <div>
                    <Link to={`/products/${product.id}`}>
                        <img
                            src={product.thumbnail}
                            className="object-cover h-48 "
                        />

                    </Link>
                </div>


                {cart.some((cartItem) => cartItem.id === product.id) ? (
                    <span
                        onClick={() => { removeFromCart(product.id) }}
                        className="absolute right-9 bottom-6 text-3xl"
                    >
                        <AiFillHeart className="transition-all hover:scale-110  text-rose-500" />
                    </span>
                ) : (
                    <span
                        onClick={() => addToCart(product)}
                        className="absolute right-9 bottom-6 text-3xl"
                    >
                        <AiFillHeart className="transition-all hover:scale-110  hover:opacity-100 text-gray-400 hover:text-rose-500" />
                    </span>
                )}

            </div>
            <div className="my-4 pb-6 flex flex-col space-y-1">
                <span className="text-md"> {product.title}</span>
                <span className="text-md font-semibold">$ {product.price}</span>
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
                <div className="text-xs font-extrabold">
                    Discounted Price $
                    {Math.round(
                        product.price - product.price * (product.discountPercentage / 100)
                    )}
                </div>
                <div className="flex gap-2">
                    <span className="font-light">Quantity:</span>
                    <button className="text-white bg-black px-2" onClick={() => { removeFromCart(product.id) }}>-</button>
                    <span>{quantity}</span>
                    <button className="text-white bg-black px-2" onClick={() => { addToCart(product, 1) }}>+</button>
                </div>
            </div>
        </li>
    );


}

export default CartCard;