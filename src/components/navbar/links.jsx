import React from 'react';

const Links = () => {
  return (
    <>

      <li className="nav-item">
        <a className="nav-link active" href="../../../public/index.html">Inicio
          <span className="visually-hidden">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../../../public/index.html">Productos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../../../public/index.html">Contacto</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../../../public/index.html"><img alt="imagen de carrito" className="icono" src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1663877288~exp=1663877888~hmac=837535825c393890cd73915eb7e2cf3a6bde072f650531d045c09e828c34f7bb" /> </a>
      </li>

    </>
  );
}

export default Links;
