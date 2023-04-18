import { useState, createContext} from "react";
import Item from "../components/Item/Item";

 export const CarritoCpntext = createContext({carrito:[]});

 export const CarritoProvider = ({chilldren})




 const agregarProducto = (Item, cantidad) => {
    if(!yaEstaEnCarrito(Item.id)) {
    setCarrito(prev => [... prev, {Item, cantidad}]);

    }else {
        console.log("ya esta en el carrito")
    }
 }
const elimarProducto =(id) => {
    const carritoActualizado =carrito.filter(prod =>prod.id !== id);
    setCarrito(carritoActualizado);

}

const eliminarCarrito =() =>{}



const yaEstaEnCarrito = (id) => {
    return carrito.some(prod => prod.id === id);
}