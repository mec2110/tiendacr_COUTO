import React, { createContext, useState } from "react";
import "./CartContext.css";
//import {useState } from "react";
//import ItemCount from "./ItemCount";

export const CartContext = createContext();

const CartContextProvider = ({context}) => {
const [cart, setCart] = useState([]);

const getquantity = () => {
    let subTotal = 0;
    cart.forEach(i=> {
        subTotal += i.TotalQuantity
    })
    return subTotal;
}



const addItem = (product, quantity) => {

    const flag = isInCart(product);
   
    if (flag) {
        let productRepeat = cart.find (i => i.item === product);
        productRepeat.TotalQuantity += quantity;

        let cartNotRepeat = cart.filter (i => i.item !== product);
        setCart([...cartNotRepeat, productRepeat]);
    } else {
        setCart([...cart, {item: product, TotalQuantity: quantity}]);
    }
}

const isInCart = (item) => {
    console.log(item);
    return cart.some(product => product.item === item );
}

const removeItem = (item) => {
console.log(item);
}

const cleanCart = () => {
    console.log(item);
}

 return (
     <CartContext.Provider value ={{
         cart, getquantity,  addItem, removeItem, cleanCart
     }} >
         {context}
    </CartContext.Provider>
 )

}
export default CartContextProvider;
