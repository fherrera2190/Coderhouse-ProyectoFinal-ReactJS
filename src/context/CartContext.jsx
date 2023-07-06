import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    // Agrega un item al carrito
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
            setTotalQuantity(totalQuantity + quantity);
            console.log('Se agrego exitosamente el producto')
        } else {
            console.error('El producto ya se encuentra en el carrito');
        }
    }
    // Actualiza el monto total del carrito cuando cambia totalQuatity
    useEffect(() => {
        setTotal(cart.reduce((total, { price, quantity }) => {
            return (total + (price * quantity));
        }, 0));
    }, [totalQuantity]);
    // Elimina un producto dado un ID
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };
    // Elimina todos los productos del carrito
    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        console.log('Se borro el carrito');
    };
    // Dado un ID consulta si un producto se encuentra en el carrito
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart, setTotalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};