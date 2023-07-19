import { addDoc, getDocs, collection, query, where, Timestamp, writeBatch, documentId } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../service/firebase/firebaseConfig";
import './Checkout.css'
function Checkout() {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, getCartTotal, clearCart } = useContext(CartContext);
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: getCartTotal(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'productos');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const { docs } = productsAddedFromFirestore
            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });
            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Hay productos que esta fuera de stock');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    if (loading) {
        return (
            <div className="container">
                <div className="text-center">
                    <div className="spinner-border m-5 p-5" role="status">
                        <span className="visually-hidden">Se esta generando su order...</span>
                    </div>
                    <h1>Se esta generando su order...</h1>
                </div>
            </div>
        );

    }
    if (orderId) {
        return (
            <div className="d-flex justify-content-center m-5">
                <div className="card col-lg-6 d-flex justify-content-center">
                    <div className="card-header">
                        <h1 className="text-center">GRACIAS POR TU COMPRA</h1>
                    </div>
                    <div className="text-center card-body bg-primary-subtle  ">
                        <p className="fs-3 text-primary">Tu numero de pedido es:{orderId}</p>
                        <div className="face"><i className="bi bi-emoji-smile" ></i></div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;