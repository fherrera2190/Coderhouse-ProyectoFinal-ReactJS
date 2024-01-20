import '../css/footer.css';
import Login from './Login/Login';
function Footer() {
  return (
    <footer className='mt-5'>
      {/* <Login></Login> */}
      <div className='footer-separador py-3 row row-cols-1 row-cols-md-3'>
        <div className='d-flex align-items-center justify-content-center'>
          <p className='text-white fs-5'>
            ENTERATE DE LAS MEJORES OFERTAS
          </p>
        </div>
        <div className='d-flex align-items-center justify-content-center my-3'>
          <form role="search">
            <input className="form-control" type="search" placeholder="Ingresa tu E-mail" aria-label="Search" />
          </form>
        </div>
        <div className='d-flex justify-content-around align-items-center'>
          <img src="https://storage.cdn.braindw.com/musimundo_hybris_produccion/script/files/2020/02/28/musi_icon_fb.png" alt="" />
          <img src="https://storage.cdn.braindw.com/musimundo_hybris_produccion/script/files/2020/02/28/musi_icon_tw.png" alt="" />
          <img src="https://storage.cdn.braindw.com/musimundo_hybris_produccion/script/files/2020/02/28/musi_icon_tw.png" alt="" />
        </div>
      </div>
      <div className='nav-footer my-3'>
        <ul className='nav-footer__listItems row row-cols-1 row-cols-sm-2  row-cols-md-3'>
          <li className='item d-flex flex-column align-items-center'>
            <img src="https://medias.musimundo.com/medias/chango-y-tel-fono.png?context=bWFzdGVyfHJvb3R8MTk0NHxpbWFnZS9wbmd8aGNmL2gyMy8xMDA0NDg1NjM2OTE4Mi5wbmd8ODRjM2VmZmJhMTdlZGFmZmJlMjc5NmVlODUwMWIxN2E3MGVjYzg1ZmMxN2EzOGI3M2QzNzNmMzcyZTg0ZDdmZA" alt="" />
            <p className='d-flex flex-column align-align-items-center'>
              <a href="#">Compra telefónica</a>
              <span>0810-888-5555</span>
            </p>
          </li>
          <li className='item d-flex flex-column align-items-center'>
            <img src="https://medias.musimundo.com/medias/?context=bWFzdGVyfGltYWdlc3wxMTMzfGltYWdlL3BuZ3xpbWFnZXMvaGZlL2g0Yy84Nzk2MjQ3MTMwMTQyLnBuZ3wzNmE5MGZjNTVjZTg0ZTcyNzdmYzIwNzMwM2E4NWZiYTM4ZmYwZThiNTNiY2UzZjM2YmJmNWVhNmRkMWVlMmZm" alt="" />
            <p className='d-flex flex-column align-items-center'>
              <a href="#">Atención al Cliente</a>
              <span>0800-444-0601</span>
              <a href="mailto:migestion@emusimundo.com">migestion@emusimundo.com</a>
            </p>
          </li>
          <li className='item d-flex flex-column align-items-center'>
            <img src="https://medias.musimundo.com/medias/?context=bWFzdGVyfGltYWdlc3wxMTY1fGltYWdlL3BuZ3xpbWFnZXMvaGYxL2hjOC84Nzk2MjQ3MjI4NDQ2LnBuZ3w5ZmYzNDM0NGViNjhkNGFhYWUzMjVjMzA4OTlkNjc5ZDYyMzgwZjEzOTU1ZjkwY2IyMDY2NmJlNmQxNzZkMjJh" alt="" />
            <p className='d-flex flex-column align-items-center'>
              <a href="#">Sucursales</a>
              <span>Encontrá la más cercana</span>
            </p>
          </li>
          <li className='item d-flex flex-column align-items-center'>
            <img src="https://medias.musimundo.com/medias/icono-DEF-Consumidor.png?context=bWFzdGVyfHJvb3R8MTY5OHxpbWFnZS9wbmd8aDU5L2hmYy8xMDI1MDAxMjk4MzMyNi9pY29uby1ERUYtQ29uc3VtaWRvci5wbmd8Yzk0ZTEzNzk5NTMzZDY3MTFlNzU4N2M0ZTZmNzQ0MTViYzkyMTQ5OGM5YWM1NTNiYWZlMGIwZDBiYTUxZTlkNg" alt="" />
            <p className='d-flex flex-column align-items-center'>
              <a href="#">Defensa de las y los consumidores</a>
              <span>Para reclamos ingrese aquí</span>
            </p>
          </li>
          <li className='item d-flex flex-column align-items-center'>
            <img src="https://medias.musimundo.com/medias/ICONOS-65X65-mearrepientook.jpg?context=bWFzdGVyfHJvb3R8MjE5MDJ8aW1hZ2UvanBlZ3xoMmQvaGYyLzEwMjU4OTAwMjU0NzUwL0lDT05PUy02NVg2NV9tZWFycmVwaWVudG9vay5qcGd8NWM4NDBhYWMzN2Y5OWJmNTY0ZGNiOTQ4NTgxODJmZGYzMmQ3YjhkMTdiMTljNThiNjM0MDU3OGRjODJmZDkxMw" alt="" />
            <p className='d-flex flex-column align-items-center'>
              <a href="#">Botón de Arrepentimiento</a>
              <span>Hacé click acá</span>
            </p>
          </li>
          <li className='item d-flex flex-column align-items-center'>
            <img src="https://medias.musimundo.com/medias/usuariosfinancieros170.png?context=bWFzdGVyfHJvb3R8MTE5NDB8aW1hZ2UvcG5nfGg4MS9oM2YvMTAyNDIzMTUxOTAzMDIvdXN1YXJpb3NmaW5hbmNpZXJvczE3MC5wbmd8YjUyNzQ1YjkyYjE2YTM5ODg3ZjY1MDg3MTljNjhjMTZkOTkzNzk1ZmJhZTM3YzEwMzE0NDJjMjFlZTE3YzVkNg" alt="" />
            <p className='d-flex flex-column align-items-center'>
              <a href="#">Ingresá a BCRA</a>
              <span>Usuarios Financieros</span>
            </p>
          </li>
          <li className='item d-flex flex-column align-items-center'>
            <img src="https://medias.musimundo.com/medias/icono-info.png?context=bWFzdGVyfHJvb3R8NTc4fGltYWdlL3BuZ3xoZDgvaGY1LzEwNDQzODkxNTcyNzY2L2ljb25vX2luZm8ucG5nfGM1ZjgzM2FjMjdiM2NhNzU5ODY1OWZmZjliYWQyMGY5OTBkZmU5NmJkMWJmNWM3NzRiNDk4ZjMzMjg2MTYyODY" alt="" />
            <p className='d-flex flex-column align-items-center'>
              <a href="#">Acuerdo UCU</a>
            </p>
          </li>
        </ul>
      </div>
      <div className='d-flex flex-column align-items-center my-3'>
        <div><img src="https://medias.musimundo.com/medias/M-roja-03.png?context=bWFzdGVyfHJvb3R8NDA2M3xpbWFnZS9wbmd8aGQwL2hlMC85ODQ1NzYyMjkzNzkwLnBuZ3w3NDNmYjhlZjA1MjE5OTUwZjM2ZDBhNDZmYTlmMmMyMjI0MGM5NmI1Zjg0MmI0MGQ2Y2VjNDVjZTdmMGM0YjM4" alt="" /></div>
        <p className='fs-4'>Todos los derechos reservados.</p>
      </div>
    </footer>);
}

export default Footer;
