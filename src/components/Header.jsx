import NavBar from "./NavBar/NavBar";
import Category from "./Category/Category";

function Header() {
  return (

    
    <header>
      <div>
        <div className="container d-flex">
          <div className="d-flex align-items-center w-50">
            <p>
              Estoy navegando desde:<span className="text-danger"> Bs As</span>
            </p>
            <button className="btn border mx-3">Confirmar</button>
          </div>
          <div className="d-flex w-50 justify-content-end align-nav-items-center">
            <div>
              <a className="nav-link" href="#">
                Sucursales
              </a>
            </div>
            <div className="mx-5">
              <a className="nav-link" href="#">
                Centro de Atención al Cliente
              </a>
            </div>
          </div>
        </div>
        <NavBar />
      </div>
      <Category />
    </header>
  );
}

export default Header;
