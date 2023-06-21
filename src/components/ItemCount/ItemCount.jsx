/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./ItemCount.css";
import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="Counter">
        <div className="Controls d-flex justify-content-around w-25 m-auto">
          <button className="btn btn-primary" onClick={decrement}>-</button>
          <h4 className="Number">{quantity}</h4>
          <button className="btn btn-primary" onClick={increment}>+</button>
        </div>
        <div>
          <button className="btn btn-primary" onClick={()=>onAdd(quantity)} >Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
