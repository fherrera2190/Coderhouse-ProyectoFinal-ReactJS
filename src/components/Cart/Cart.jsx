import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart() {

    const { cart, clearCart, totalQuantity, getCartTotal } = useContext(CartContext);
    if (totalQuantity === 0) {
        return (
            <div className='container d-flex justify-content-center'>
                <div className='col-lg-6 d-flex flex-column mt-5 cart__container'>
                    <h1 className='text-center'>No hay productos en tu caro <i class="bi bi-emoji-frown"></i></h1>
                    <div className='text-center'><Link to='/' className='btn btn-info text-white m-3'>Productos</Link></div>
                </div>

            </div>
        )
    };
    return (
        <div className='container d-flex flex-column mt-5 cart__container'>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <div className='container d-flex justify-content-between my-3'>
                <div>
                    <button className='btn btn-primary' onClick={() => clearCart()}>Limpiar Carrito</button>
                </div>
                <div className='d-flex'>
                    <h3 className='px-5'>Total: ${getCartTotal()}</h3>
                    <div>
                        <Link className='btn btn-primary' to='/checkout'>Procesar Compra</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart