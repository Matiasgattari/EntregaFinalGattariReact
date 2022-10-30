
import React, {useContext, useEffect, useState} from 'react';
import { cartContext } from '../../context/cartContext';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {darkMode} = useContext(DarkModeContext);
    const {cart, quitarProducto} = useContext(cartContext)
    const [cartLocal, setCartLocal] = useState([]);

    useEffect(() => {
        
        const prodMostrar  = cart.map(producto => 
          <div key={producto[0]}  className="card mb-3  m-2  d-flex  justify-content-center align-items-center" style={{width:'80%'}} >
                    <div className="card-body d-flex flex-row ">
                            <h5 className="card-title m-2 ">Cerveza {producto[1].nombre}</h5>
                            <p className="card-text m-2">Precio unidad: $ {producto[1].precio}</p>
                            <p className="card-text m-2">Cantidad: {producto.cantidad}</p>
                            <p className="card-text m-2">Precio Total: $ {producto[1].precio * producto.cantidad}</p>
                            <button className='btn btn-dark m-2' onClick={() => quitarProducto(producto)} ><Link className='nav-link' to={`/`}>Eliminar</Link></button>
                    </div>
                </div>)
        setCartLocal(prodMostrar)
        
    }, [cart]);

   const app = (cart.length !== 0) ? <div className={darkMode ? 'darkMode row m-5': 'row m-5'}> {cartLocal} </div> : <> <h1>No existen elementos en el carrito </h1> <button className='botonDetalle btn btn-dark'><Link className='nav-link' to={`/`}>Volver al catalogo</Link></button> </>

    return app
}

export default Cart;

