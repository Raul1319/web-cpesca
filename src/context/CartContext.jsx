import { createContext, useEffect, useState } from "react";
import axios from "axios"

const CartContext = createContext();

export const CartProvider = ({chilren}) =>{

// crea estad para el carrito
const [cartItems, setCartItems] = useState([]);
const [products, setProducts] = useState([])
    try {
        //Verifica si hay productos en localStorage, si hay se pasa como strin y si no devuelve array vacio//
        const productsInLocalStorage = localStorage.getItem("cartProducts");
        return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
        
    } catch (error) {
        return [];
        
    }


//cundo se actualice el carrito reserteamos localStorage para guardar productos
useEffect(() =>{
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));

},[cartItems])

// Función para agrregar productos al carrito
const AdditemToCart = (product) =>{
    const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
    );

    //si esta en el carrito lo recorremos y sumamaos 1 a la cantidad si no lo dejamos como estaba
    if(inCart){
        setCartItems(
            cartItems.map((productInCart) =>{
                if(productInCart.id === product.id){
                    return {...inCart, amount: inCart.amount +1}
                }else{
                    return productInCart;
                }
            })
        )
    }
}
}