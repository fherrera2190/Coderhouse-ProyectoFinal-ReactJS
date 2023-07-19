import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";

function CartWidget() {
    const { totalQuantity } = useContext(CartContext);
    return (
        <>
            <div>
                {/* Habilita CartWidget cuando existe al menos un producto en el carrito */}
                <Link to='/cart' className="btn btn-primary position-relative" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
                    <i className="bi bi-cart4"></i>
                    <span className="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalQuantity}
                    </span>
                </Link>
            </div>
        </>
    );
}

export default CartWidget;