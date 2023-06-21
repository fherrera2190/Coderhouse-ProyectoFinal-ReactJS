/* eslint-disable no-unused-vars */

import ItemCount from "../ItemCount/ItemCount";

/* eslint-disable react/prop-types */
const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <>
      <article className="card">
        <img src={img} className="card-img-top h-25 w-25 m-auto " alt={name} />
        <div className="text-center">
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
    </>
  );
};

export default ItemDetail;
