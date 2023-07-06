import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
            setTotalQuantity(totalQuantity + quantity);
            console.log('Se agrego exitosamente el producto')
        } else {
            console.error('El producto ya se encuentra en el carrito');
        }
    }
    useEffect(() => {
        setTotal(cart.reduce((total, { price, quantity }) => {
            return (total + (price * quantity));
        }, 0));
    }, [totalQuantity]);

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        console.log('Se borro el carrito');
    };
    
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart, setTotalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};