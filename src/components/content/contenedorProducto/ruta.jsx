import React from 'react';
import { Link } from 'react-router-dom'; 
const Ruta = ({producto}) => {
    return (
        <>
            <div className='d-flex flex-row flex-wrap m-3 rutaDetalle'>
                <Link className="nav-link active" to="/">Home  /</Link>
                <Link className='nav-link' to={`/Category/`+ producto.idCategoria}>{producto.nombreCategoria}  /</Link>
                <Link className='nav-link' to={`/producto/${producto.id}`}>  {producto.nombre}</Link>
            </div>
        </>
    );
}

export default Ruta;
