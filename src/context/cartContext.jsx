import React, {createContext,  useState} from 'react';


const cartContext =createContext()



const CartProvider = (props) => {
    
    const [cart, setCart] = useState([]);


    const agregarProducto = (prod,cant) => {
        
const aux = cart

let indice = cart.findIndex(producto => producto[0]===prod[0])
if(indice !== -1) {
    aux[indice].cantidad = cant
} else {
    const prodCart = {...prod, cantidad: cant}
    aux.push(prodCart)
}
setCart(aux)
console.log(aux)


    }


    const quitarProducto = (prod) =>{
        const aux = cart
        let indice = cart.findIndex(producto => producto[0]===prod[0])
        aux.splice(indice,1);
        setCart(aux);
        console.log(aux);
        
    }



    return (
        <>
            

<cartContext.Provider value={{cart, agregarProducto,quitarProducto}}>

{props.children}
</cartContext.Provider>

        </>
    );
}

export {cartContext,CartProvider};

