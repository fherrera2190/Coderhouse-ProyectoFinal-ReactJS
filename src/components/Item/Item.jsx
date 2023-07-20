/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {

  const consultarStock = () => {
    if (stock > 0) {
      return (
        <>
          <div className="d-flex justify-content-center">
            <Link to={`/item/${id}`} className="w-50 btn btn-info text-white p-2">
              Ver Más
            </Link>
          </div>
        </>

      );
    }
    else {
      return (<>
        <div className="d-flex justify-content-center">
          <button className="btn text-white fs-6 bg-danger w-50 p-2">No hay stock</button>
        </div>
      </>
      );
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <div className="card shadow" style={{ width: "18rem" }}>
          <div className="d-flex justify-content-center align-content-center mx-auto" style={{ height: "180px", width: "180px" }} >
              <img className="object-fit-contain p-3" src={img}  alt={name} />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title m-0" >{name}</h5>
            <div className="card-text">
              <p >Precio:${price}</p>
              <p >Stock Disponible: {stock}</p>
            </div>
          </div>
          <footer className="card-footer align-self-center w-100">
            {consultarStock()}
          </footer>
        </div>
      </div >
    </>
  );
};

export default Item;
