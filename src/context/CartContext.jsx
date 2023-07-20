import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cart, setCart] = useState([]);

    // Agrega un item al carrito
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
            setTotalQuantity(totalQuantity + quantity);
        } else {
            modifyProductQuantity(item, quantity);
        }
    }
    // Aumentar cantidad de producto
    const modifyProductQuantity = (item, quantity) => {
        let itemQuantity = 0;
        let itemsCart = cart.filter(itemCart => {
            if (itemCart.id === item.id) {
                itemQuantity = itemCart.quantity;
            } else {
                return itemCart;
            }
        });
        setCart([...itemsCart, { ...item, "quantity": quantity + itemQuantity }])
        setTotalQuantity(totalQuantity + quantity);
    }

    const getCartTotal = () => {
       return cart.reduce((total, { price, quantity }) => {
            return (total + (price * quantity));
        }, 0)
    }
    // Elimina un producto dado un ID
    const removeItem = (itemId, quantity) => {
        setCart(cart.filter(prod => prod.id !== itemId));
        setTotalQuantity(totalQuantity - quantity);
    };
    // Elimina todos los productos del carrito
    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
    };
    // Dado un ID consulta si un producto se encuentra en el carrito
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, clearCart, setTotalQuantity, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};