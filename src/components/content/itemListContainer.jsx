import React, { useState, useEffect, useContext } from 'react';
import { consultarBDD } from '../../utils/funcionesUtiles';
import { Link } from 'react-router-dom'
import '../../estilos/App.css'

// para contexto darkmode, consulto el contexto ya que el provider lo consulte en app.jsx  . Elemento que consulta el contexto lo tengo que importar
import { DarkModeContext } from '../../context/darkModeContext';



const ItemListContainer = () => {

    //consulto el darkmode, el toggle de useContext. darkMode es el estado actual del contexto que siempre puede modificarse, y la forma de modificarlo
const {darkMode} = useContext(DarkModeContext);


    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {
            const cardProducto = productos.map(producto =>

                

                <div key={producto.id} className="card mb-3 m-5  d-flex justify-content-center align-items-center" style={{ width: '300px', height: 'auto' }}>
                    <h3 className="card-header">Cerveza {producto.nombre}</h3>
                    <div className="card-body">
                    </div>
                    <img style={{ width: '100%', height: '200px' }} src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <p className="card-text"> Categoría: {producto.nombreCategoria}</p>
                        <p className="card-text">Precio: {producto.precio}</p>
                        <p className="card-text">Stock disponible: {producto.stock}</p>
                        <button className='btn btn-dark verProductoBoton'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                    </div>
                </div>
            )

            setProductos(cardProducto)
        })
    }, []);


    return (
        <>
            <div className={darkMode ? 'darkMode row': 'row'}>
                
                {productos}
                <p></p>
            </div>









        </>
    );
}

export default ItemListContainer;
