/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  console.log(img)
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
        <div className="card shadow m-auto" style={{ width: "18rem" }}>
          <div className="d-flex justify-content-center align-content-center mx-auto" style={{ height: "180px", width: "180px" }}>
            <img src={img} className="object-fit-contain p-3"alt={name} />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Categoria:{category}</p>
            <p className="card-text">Description :{description}</p>
            <p className="card-text">Precio:${price}</p>
            <div className="card-footer">
              {
                quantityAdded > 0 ? (
                  <Link to='/cart' className="btn btn-primary">Terminar Compra</Link>
                ) : (
                  <ItemCount initial={1} stock={stock} onAdd={hadleOnAdd} />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
