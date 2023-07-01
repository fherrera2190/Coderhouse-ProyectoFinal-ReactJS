/* eslint-disable no-unused-vars */

import ItemCount from "../ItemCount/ItemCount";

/* eslint-disable react/prop-types */
const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <article className="card m-auto" style={{ width: "18rem"}}>
          <img src={img} className="card-img-top" alt={name} />
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Categoria:{category}</p>
            <p className="card-text">Description :{description}</p>
            <p className="card-text">Precio:${price}</p>
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(quatity) => console.log("Cantidad Agregada")}
            />
          </div>
        </article>
      </div>
    </>
  );
};

export default ItemDetail;
