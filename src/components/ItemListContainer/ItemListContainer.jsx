/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { getProducts } from "../../data/asynMocks";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
}

export default ItemListContainer;
