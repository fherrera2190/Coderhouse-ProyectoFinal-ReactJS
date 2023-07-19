import { useState } from "react";
import './CheckoutForm.css'
function CheckoutForm({ onConfirm }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name, phone, email
    }
    onConfirm(userData)
  }
  return (
    <div className="container w-100 d-flex justify-content-center">
      <form onSubmit={handleConfirm} className="Checkout__Form">
        <div className="mb-3">
          <label for="nombre" className="form-label">Nombre:</label>
          <input className="form-control" type='text' id="nombre" value={name} onChange={({ target }) => setName(target.value)} />
        </div>
        <div className="mb-3">
          <label for="telefono" className="form-label">Telefono:</label>
          <input className="form-control" type='tel' id="telefono" value={phone} onChange={({ target }) => setPhone(target.value)} />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">E-mail:</label>
          <input className="form-control" type='email' id="email" value={email} onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div className="d-flex justify-content-center ">
          <button type="submit" className="btn btn-primary ">Crear Orden</button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm;