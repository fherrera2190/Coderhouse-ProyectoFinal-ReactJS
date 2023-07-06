/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="m-auto p-4" style={{ height: "180px", width: "180px" }} >
            <img src={img} className="card-img-top" alt={name} />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title" >{name}</h5>
            <p className="card-text">Precio:${price}</p>
            <p className="card-text">Stock Disponible: {stock}</p>
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
