/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Item from "../Item/Item";


const ItemList = ({ products }) => {
  return (
    <>
      <div className="mt-5 row row-cols-lg-3">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
