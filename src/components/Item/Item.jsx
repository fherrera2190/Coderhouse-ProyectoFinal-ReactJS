/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Item = ({ id, name, img, price, stock }) => {
  return (
    <>
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{name}</h2>
        </header>
        <picture>
          <img src={img} alt="ItemImg" />
        </picture>
        <section>
          <p className="Info">Precio:${price}</p>
          <p className="Info">Stock Disponible:${stock}</p>
        </section>
        <footer className="ItemFooter">
          <button className="Option">Ver detalle</button>
        </footer>
      </article>
    </>
  );
};

export default Item;
