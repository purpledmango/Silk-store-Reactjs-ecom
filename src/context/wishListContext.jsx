import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        const isItemInWishlist = wishlist.some((item) => item.product.id === product.id);

        if (!isItemInWishlist) {
            setWishlist((prevWishlist) => [...prevWishlist, { product }]);
        }
    };

    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.product.id !== productId));
    };

    const clearWishlist = () => {
        setWishlist([]);
    };

    const wishlistSize = wishlist.length;
    console.log("Wish List", wishlist)
    return (
        <WishlistContext.Provider
            value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist, wishlistSize }}
        >
            {children}
        </WishlistContext.Provider>
    );
};
