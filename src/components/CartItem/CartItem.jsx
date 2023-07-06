import './CartItem.css';

function CartItem({ id, name, price, quantity }) {
    return (
        <div className="text-center">
            <div className="d-flex justify-content-around align-items-center fs-6">
                <h6 className='w-100 p-4'>{name}</h6>
                <p className='w-100'>Cantidad: {quantity}</p>
                <p className='w-100'>Precio x Unidad: ${price}</p>
                <p className='w-100'>Subtotal: ${price * quantity}</p>
                <div className=" text-center w-100 ">
                    <button className="btn btn-danger m-auto">Eliminar  <i class="bi bi-trash"></i></button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem;