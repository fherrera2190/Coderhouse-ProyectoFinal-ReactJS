import { NavLink } from "react-router-dom";
import "./Category.css";
function Categorias() {
  return (
    <>
      <div className="container d-flex w-100 align-items-center category">
        <div className="">
          <a className="nav-link m-3" href="#" title="Comprar por Categorías">
              Comprar por Categorías
          </a>
        </div>
        <div className="d-flex bg-danger flex-grow-1">
          {/* Categoria Notebook */}
          <div className="btn-category">
            <NavLink
              to={`/category/notebook`}
              className={({ isActive }) =>
                isActive
                  ? "ActiveOption btn btn-danger"
                  : "Option btn btn-danger"
              }
            >
              <img
                src="https://medias.musimundo.com/medias/cat98-notebooks.png?context=bWFzdGVyfHJvb3R8MTE2M3xpbWFnZS9wbmd8aGEyL2gwNC85Mzg2MzQ1NjkzMjE0LnBuZ3xlMmI1NzQ5MjQyZmQ3NzExNmE2ZDU0YjczODk4ZGRhMmEzNzhkY2I3NGViYTI3ZWJlZGIyY2M0NTY5OTg4NGE2"
                alt="Notebook"
              />
              <p>Notebook</p>
            </NavLink>
          </div>
          {/* Categoria Celulares */}
          <div className="btn-category">
            <NavLink
              to={"/category/celular"}
              className={({ isActive }) =>
                isActive
                  ? "ActiveOption btn btn-danger"
                  : "Option btn btn-danger"
              }
            >
              <img
                src="https://medias.musimundo.com/medias/cat82-celulares.png?context=bWFzdGVyfHJvb3R8MTI2MnxpbWFnZS9wbmd8aGE4L2hhNi8xMDI1NjQwMDMxODQ5NC9jYXQ4Ml9jZWx1bGFyZXMucG5nfDljYTNiYzFkYTIzNTY4NDY1OTE3ZDM5NzkwNDNkZmU4YTg4MDU0Y2U0ZDg5NmU5Mjk5NGVjN2NjNjZlZDEzYWM"
                alt="Celulares"
              />
              <p>Celulares</p>
            </NavLink>
          </div>
          {/* Categoria Tablet */}
          <div className="btn-category">
            <NavLink
              to={"/category/tablet"}
              className={({ isActive }) =>
                isActive
                  ? "ActiveOption btn btn-danger"
                  : "Option btn btn-danger"
              }
            >
              <img
                src="https://medias.musimundo.com/medias/cat99-tablets.png?context=bWFzdGVyfHJvb3R8MTEzOHxpbWFnZS9wbmd8aGVlL2g4Ny85Mzg2MzQ1NzU4NzUwLnBuZ3xhYTg4ZmUxZjI4MWM1NTc0MWI0NGY5MDkyYTFmYTBjNzA2Mzc4YjA2ZWI4MGI2NWRlMGM2YmY0NmM3NzlhZWI4"
                alt="Tablets"
              />
              <p>Tablets</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categorias;
