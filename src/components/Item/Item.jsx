/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Item = ({ id, name, img, price, stock }) => {
  return (
    <>
      <article className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Precio:${price}</p>
          <p className="card-text">Stock Disponible:${stock}</p>
          <footer className="ItemFooter">
            <Link to={`/item/${id}`} className="Option btn btn-info text-white">
              Ver detalle
            </Link>
          </footer>
        </div>
      </article>
    </>
  );
};

export default Item;
