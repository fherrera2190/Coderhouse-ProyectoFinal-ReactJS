import ItemListContainer from "./ItemListContainer/ItemListContainer";

function Main() {
  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center ">
          <ItemListContainer greeting={"Bienvenidos"} />
        </div>
      </div>
    </main>
  );
}

export default Main;
