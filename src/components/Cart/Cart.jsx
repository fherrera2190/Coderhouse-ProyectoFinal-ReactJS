import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart() {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
    console.log(total);
    if (totalQuantity === 0) {
        return (
            <div className='container'>
                <h1>No hay productos en tu carrito</h1>
                <Link to='/' className='btn btn-primary'>Productos</Link>
            </div>
        )
    };
    return (
        <>
            <div className='container d-flex flex-column mt-5 cart__container'>
                {cart.map(p => <CartItem key={p.id} {...p} />)}
                <div className='container d-flex justify-content-between my-3'>
                    <div>
                        <button className='btn btn-primary' onClick={() => clearCart()}>Limpiar Carrito</button>
                    </div>
                    <div className='d-flex'>
                        <h3 className='px-5'>Total: ${total}</h3>
                        <Link className='btn btn-primary' to='/checkout'>Procesar Compra</Link>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Cart