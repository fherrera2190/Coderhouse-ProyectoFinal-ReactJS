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
  {
    id: "4",
    name: "Notebook gamer Asus TUF Gaming F15 FX506LHB bonfire",
    price: 2500,
    category: "notebook",
    img: "https://http2.mlstatic.com/D_NQ_NP_847596-MLA51231972332_082022-O.webp",
    stock: 25,
    description: "Descripcion de Notebook gamer Asus TUF Gaming F15",
  },
  {
    id: "5",
    name: "Ultrabook Gadnic Cloudbook Glow Pro gray 14.1",
    price: 2500,
    category: "notebook",
    img: "https://http2.mlstatic.com/D_NQ_NP_962754-MLA48892796385_012022-O.webp",
    stock: 25,
    description: "Descripcion de Ultrabook Gadnic Cloudbook Glow Pro",
  },
  {
    id: "6",
    name: "Aple MacBook Pro (16 pulgadas, Chip M1 Pro",
    price: 2500,
    category: "notebook",
    img: "https://http2.mlstatic.com/D_NQ_NP_946410-MLA48352501573_112021-O.webp",
    stock: 25,
    description: "de Aple MacBook Pro...",
  },
  {
    id: "7",
    name: "Tablet Samsung Galaxy Tab A A7 Lite SM-T220 8.7",
    price: 2500,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_NQ_NP_860534-MLU69483007614_052023-O.webp",
    stock: 25,
    description: "Tablet Samsung Galaxy Tab A A7...",
  },
  {
    id: "8",
    name: "Apple iPad (9ª generación)",
    price: 2500,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_NQ_NP_980498-MLA47871333049_102021-O.webp",
    stock: 25,
    description: "Tablet Apple iPad (9ª generación)...",
  },
  {
    id: "9",
    name: "Tablet Lenovo Tab M10 HD 2nd Gen TB-X306F",
    price: 2500,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_NQ_NP_943577-MLA47931288076_102021-O.webp",
    stock: 25,
    description: "Descripcion de Tablet Lenovo Tab M10 HD 2nd Gen TB-X306F",
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

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};
