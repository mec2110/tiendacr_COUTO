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

const removeItem = (itemId) => {
console.log(item);
const item = list.filter ((e)=>{
    return parseInt (e.id) !== parseInt (itemId)
})
}
updateCounter ();


const cleanCart = (quantity) => {
  console.log(quantity);
  const items = list.filter ((e)=>{
    return parseInt (e.id) !== parseInt (quantity)
})
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
