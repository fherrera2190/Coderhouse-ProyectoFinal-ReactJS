const products = [
  {
    id: "1",
    name: "Iphone 12",
    price: 1000,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_912054-MLA53354557227_012023-O.webp",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "2",
    name: "Iphone 13",
    price: 1400,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_802505-MLA43975720632_112020-O.webp",
    stock: 25,
    description: "Descripcion de Iphone 13",
  },
  {
    id: "3",
    name: "Iphone 11",
    price: 800,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_656548-MLA46114829749_052021-O.webp",
    stock: 25,
    description: "Descripcion de Iphone 11",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
