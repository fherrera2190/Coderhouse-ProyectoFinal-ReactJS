import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="nav-color">
        <div className="w-100 d-flex justify-content-center ">
          <Link to="/">
            <img
              src={
                "https://medias.musimundo.com/medias/M-roja-03.png?context=bWFzdGVyfHJvb3R8NDA2M3xpbWFnZS9wbmd8aGQwL2hlMC85ODQ1NzYyMjkzNzkwLnBuZ3w3NDNmYjhlZjA1MjE5OTUwZjM2ZDBhNDZmYTlmMmMyMjI0MGM5NmI1Zjg0MmI0MGQ2Y2VjNDVjZTdmMGM0YjM4"
              }
              className="logo"
              alt="Logo"
            />
          </Link>
        </div>
        <nav className="navbar navbar-expand-sm nav-color">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <CartWidget />
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav text-center navbar-menu">
                <li className="nav-item ">
                  <Link className="nav-link active" aria-current="page" to={`/category/notebook`}>
                    <img src="https://medias.musimundo.com/medias/cat98-notebooks-mobile.png?context=bWFzdGVyfHJvb3R8MzEwfGltYWdlL3BuZ3xoNzMvaDNlLzkzODYzNDU5ODgxMjYucG5nfDc5Mzc1MTcyZjJiYTU0Njg1ZDAwNzE5YzQ0YzdhMzcwZTg0Y2MyNTk4OTc5ZjczZWVhMmQ3YWQ1NmE4NDFiYmQ" alt="Notebooks" />Notebook
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/celular"}>
                    <img src="https://medias.musimundo.com/medias/cat82-celulares-mobile.png?context=bWFzdGVyfHJvb3R8MjQwfGltYWdlL3BuZ3xoNWYvaGNjLzkzODYzNDU5NTUzNTgucG5nfGZlODdkZmM0OTE5ZTA5Mzg1YzM4NTkxNGYwNzMzZTdhNWY5NmQzMGE2MDRhNTI4MTU1NTZiMmFhY2IzNWVlNTU" alt="Celulares" />
                    Celulares
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/tablet"}>
                    <img src="https://medias.musimundo.com/medias/cat99-tablets-mobile.png?context=bWFzdGVyfHJvb3R8Mjg3fGltYWdlL3BuZ3xoZjIvaDM5LzkzODYzNDYwMjA4OTQucG5nfDFiMWNjOTgxNzQ4MjFjYTRkZjc2YzdmOThhOGJjZTgyY2I0ZGQ0NWIyNjZmNmQ2MzZkZjY5ZDcwOWY5MGQyMDc" alt="Tablets" />
                    Tablets
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </>
  );
}

export default NavBar;
