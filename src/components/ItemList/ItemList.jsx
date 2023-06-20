/* eslint-disable react/prop-types */

import Item from "../Item/Item";

/* eslint-disable no-unused-vars */

const ItemList = ({ products }) => {
  return (
    <>
      <div className="ListGroup">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
        ;
      </div>
    </>
  );
};

export default ItemList;
