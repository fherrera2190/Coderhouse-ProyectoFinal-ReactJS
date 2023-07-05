
function CartItem({ id, name, price, quantity }) {
    return (
        <div className="d-flex justify-content-center m-5">
            <div className="row row-cols-5 fs-6">
                <p>{name}</p>
                <p>Cantidad: {quantity}</p>
                <p>Precio x Unidad: ${price}</p>
                <p>Subtotal: ${price * quantity}</p>
                <button>X</button>
            </div>

        </div>
    )
}

export default CartItem;