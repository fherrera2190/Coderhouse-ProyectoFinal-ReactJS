/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getProductById } from "../../data/asynMocks";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();
  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);
  return (
    <>
      <div className="">
        <ItemDetail {...product} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
