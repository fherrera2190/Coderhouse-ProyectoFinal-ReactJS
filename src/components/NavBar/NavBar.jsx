import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-color">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={
                "https://medias.musimundo.com/medias/M-roja-03.png?context=bWFzdGVyfHJvb3R8NDA2M3xpbWFnZS9wbmd8aGQwL2hlMC85ODQ1NzYyMjkzNzkwLnBuZ3w3NDNmYjhlZjA1MjE5OTUwZjM2ZDBhNDZmYTlmMmMyMjI0MGM5NmI1Zjg0MmI0MGQ2Y2VjNDVjZTdmMGM0YjM4"
              }
              className="logo"
              alt=""
            />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-end">
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
