/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {

  const consultarStock = () => {
    if (stock > 0) {
      return (
        <>
          <Link to={`/item/${id}`} className="Option btn btn-info text-white">
            Ver Más
          </Link>
        </>

      );
    }
    else {
      return (<>
        <div className="btn bg-danger disabled">
          <h4 className="text-white fs-6">No hay stock</h4>
        </div>
      </>
      );
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <div className="card shadow" style={{ width: "18rem" }}>
          <div className="m-auto p-4" style={{ height: "180px", width: "180px" }} >
            <img src={img} className="card-img-top" alt={name} />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title" >{name}</h5>
            <p className="card-text">Precio:${price}</p>
            <p className="card-text">Stock Disponible: {stock}</p>
            <footer className="ItemFooter">
              {consultarStock()}
            </footer>
          </div>
        </div>
      </div >
    </>
  );
};

export default Item;
