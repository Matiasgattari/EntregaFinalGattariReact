import React from 'react';
import Busqueda from './busqueda.jsx';
import Desplegable from './desplegable.jsx';
import Links from './links.jsx';
import Logo from './logo.jsx';
const NavBar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">

          <Logo />

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Links />

              <Desplegable />

            </ul>

            <Busqueda busqueda="Qué buscas?" />

          </div>
        </div>
      </nav>


    </>
  );
}

export default NavBar;
