import SideBar from "../SiderBar";
import Spinner from "../Spinner";
import { useCart } from "../../context/cartContext";
import { fetchAllCategories } from "../../services/products";

import { useState, useEffect } from "react";
import CartCard from "../CartCard";
import { useWishlist } from "../../context/wishListContext";
const WishList = () => {

    const { wishList } = useWishlist();
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        document.title = `Cart - The Silk Store`;
        setLoading(true);
    }, []);
    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const getCategories = await fetchAllCategories();
                console.log(getCategories); // Check if categories are fetched
                setCategories(getCategories);
            } catch (err) {
                console.log(err);
            }
        };

        fetchCategoryData();
        setLoading(false)
    }, []);
    return (




        <div className="w-full mx-2  lg:pt-6lg: pt-6 grid grid-cols-12 bg-bg-accent">
            {/* Side bar */}
            <SideBar
                allCategories={categories}
            // category={category}
            // setCat={setProducts} // Assuming setProducts is correct for updating the category
            />

            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-24">
                {loading ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <Spinner />
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl text-center capitalize">Your Wishlist</h2>
                        <div className="grid grid-cols-8  p-6 h-full ">
                            <ul className="col-span-8 md:col-span-6 flex flex-col gap-6 w-full h-full justify-start items-center">
                                {/* card */}
                                {Array.isArray(wishList) &&
                                    wishList.map((item, key) => (
                                        <CartCard
                                            key={key}
                                            product={item.product}
                                            quantity={item.quantity}


                                        />
                                    ))}
                            </ul>
                            <div className="h-full col-span-8 md:col-span-2 flex flex-col items-center justify-start p-6 gap-6">
                                {wishList.length > 0 && (<>
                                    <span className="text-lg">

                                        Your items are ready to be delivered. Place your order now to receive them!
                                    </span>
                                    <button className="w-full py-4 bg-typography-default text-white font-semibold">Buy Now</button>
                                </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>

    )
}

export default WishList;