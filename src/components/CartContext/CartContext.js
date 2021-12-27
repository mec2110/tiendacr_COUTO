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
        subTotal += i.TotalQuantity
    })
    return subTotal;
}



const addItem = (product, quantity) => {
const flag = isInCart(product);
if (flag) {
        let productRepeat = cart.find (i => i.item === product);
        productRepeat.TotalQuantity += quantity;

        let cartNoRepeat = cart.filter (i => i.item !== product); //todos los elementos que no sean el producto en cuestiòn
        setCart([...cartNoRepeat, productRepeat]);
    } else {
        setCart([...cart, {item: product, TotalQuantity: quantity}]);
    }
}

const isInCart = (item) => {
    console.log(item);
    return cart.some(products => products.item === item );
}

const removeItem = (products) => {

let removeFromCart = cart.filter (i => i.item !== products);
setCart ([removeFromCart]);
}

const cleanCart = () => {
 setCart ([]);
}

 return (
     <CartContext.Provider value ={{cart, getquantity, addItem, removeItem, cleanCart }} >
         {children}
    </CartContext.Provider>
 )

}
export default CartContextProvider;
