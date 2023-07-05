/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Item = ({ id, name, img, price, stock }) => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="card m-auto" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt={name} />
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Precio:${price}</p>
            <p className="card-text">Stock Disponible:${stock}</p>
            <footer className="ItemFooter">
              <Link to={`/item/${id}`} className="Option btn btn-info text-white">
                Ver detalle
              </Link>
            </footer>
          </div>
        </div>
      </div >
    </>
  );
};

export default Item;
