
import React, {useContext, useEffect, useState} from 'react';
import { cartContext } from '../../context/cartContext';
import { DarkModeContext } from '../../context/darkModeContext';


const Cart = () => {
    const {darkMode} = useContext(DarkModeContext);
    const {cart, agregarProducto, quitarProducto} = useContext(cartContext)
    const [cartLocal, setCartLocal] = useState([]);

    useEffect(() => {
        const prodMostrar  = cart.map(producto => 
          <div key={producto.id} className="card mb-3  m-2  d-flex  justify-content-center align-items-center" style={{width:'80%'}} >
                   
                        <div className="card-body d-flex flex-row ">
                            <h5 className="card-title m-2 ">Cerveza {producto.nombre}</h5>
                            <p className="card-text m-2">Precio unidad: $ {producto.precio}</p>
                            <p className="card-text m-2">Cantidad: {producto.cantidad}</p>
                            <p className="card-text m-2">Precio Total: $ {producto.precio * producto.cantidad}</p>
                            <button className='btn btn-dark m-2' onClick={() => quitarProducto(producto)}>Eliminar</button>
                    </div>
                </div>)
        setCartLocal(prodMostrar)
    }, [cart]);

   const app = (cart.length !== 0) ? <div className={darkMode ? 'darkMode row m-5': 'row m-5'}> {cartLocal} </div> : <> <h1>No existen elementos en el carrito <button className='btn btn-dark'>Ir al Home</button></h1></>

    return app
}

export default Cart;

