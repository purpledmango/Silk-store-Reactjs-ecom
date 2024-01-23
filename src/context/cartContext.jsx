import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const existingItem = cart.find((item) => item.product.id === product.id);

        if (existingItem) {
            // Product is already in the cart, update the quantity
            setCart((prevCart) => {
                const updatedCart = prevCart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
                return updatedCart;
            });
        } else {
            // Product is not in the cart, add a new item
            setCart((prevCart) => [...prevCart, { product, quantity }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            return prevCart.map((item) =>
                item.product.id === productId
                    ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                    : item
            ).filter((item) => item.quantity > 0);
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartSize = cart.reduce((acc, item) => acc + item.quantity, 0);

    // console.log("Context cart", cart);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartSize }}>
            {children}
        </CartContext.Provider>
    );
};
