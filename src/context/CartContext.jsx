import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
            setTotalQuantity(totalQuantity + 1);
            console.log(totalQuantity);
            console.log(cart);
        } else {
            console.log(totalQuantity);
            console.log(cart);
            console.error('El producto ya fue agregado');
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };
    return (
        <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};