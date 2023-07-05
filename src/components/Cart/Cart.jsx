import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

function Cart() {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    };
    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button className='btn btn-primary' onClick={() => clearCart}>Limpiar Carrito</button>
            <Link className='btn btn-primary' to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart