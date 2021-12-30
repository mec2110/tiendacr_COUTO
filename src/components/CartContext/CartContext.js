import React, { createContext, useState } from "react";
import "./CartContext.css";
//import {useState } from "react";
//import ItemCount from "./ItemCount";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
const [cart, setCart] = useState([]);

const getquantity = () => {
    let subTotal = 0;
    cart.forEach(i=> {
        console.log(i);
        subTotal += i.quantity
    })
    return subTotal;
}



const addItem = (product, Totalquantity) => {
const flag = isInCart(product);
if (flag) {
        let productRepeat = cart.find (i => i.item === product);
        productRepeat.quantity += Totalquantity;

        let cartNoRepeat = cart.filter (i => i.item !== product); //todos los elementos que no sean el producto en cuestiòn
        setCart([...cartNoRepeat, productRepeat]);
    } else {
        setCart([...cart, {item: product, quantity: Totalquantity}]);
    } getquantity ([]);
}

const isInCart = (item) => {
    console.log(item);
    return cart.some(products => products.item === item );
}

const removeItem = (id) => {

let removeFromCart = cart.filter (i =>{ return i.item.id !== id});
setCart (removeFromCart);
} 

const cleanCart = (products) => {
    setCart ([]);
}

 return (
     <CartContext.Provider value ={{cart, getquantity, addItem, removeItem, cleanCart }} >
         {children}
    </CartContext.Provider>
 )

}
export default CartContextProvider;
