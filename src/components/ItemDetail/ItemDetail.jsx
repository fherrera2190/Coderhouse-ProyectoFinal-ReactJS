/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem, totalQuantity, setTotalQuantity } = useContext(CartContext);


  const hadleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id, name, price
    };
    addItem(item, quantity)

  }

  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <article className="card m-auto" style={{ width: "18rem" }}>
          <div className="m-auto p-4" >
            <img src={img} className="card-img-top" style={{ height: "180px", width: "180px" }} alt={name} />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Categoria:{category}</p>
            <p className="card-text">Description :{description}</p>
            <p className="card-text">Precio:${price}</p>
            <div>
              {
                quantityAdded > 0 ? (
                  <Link to='/cart' className="btn btn-primary Option">Terminar Compra</Link>
                ) : (
                  <ItemCount initial={1} stock={stock} onAdd={hadleOnAdd} />
                )
              }
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ItemDetail;
