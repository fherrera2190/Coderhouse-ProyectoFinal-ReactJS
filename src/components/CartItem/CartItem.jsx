import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartItem({ id, name, price, quantity }) {
    const { removeItem } = useContext(CartContext);
    return (
        < >
            <div className="row row-cols-md-5 d-flex align-items-center justify-content-center">
                <h6 className=''>{name}</h6>
                <p className=''>Cantidad: {quantity}</p>
                <p className=''>Precio x Unidad: ${price}</p>
                <p className=''>Subtotal: ${price * quantity}</p>
                <div className="text-center">
                    <button className="btn btn-danger" onClick={() => { removeItem(id, quantity) }}>Eliminar  <i className="bi bi-trash"></i></button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItem;