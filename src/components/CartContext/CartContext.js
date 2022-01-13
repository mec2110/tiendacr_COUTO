import React, { createContext, useState } from "react";
import "./CartContext.css";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
const [cart, setCart] = useState([]);
const [userEmail, setUserEmail] = useState("");


const getquantity = () => {
    let subTotal = 0;
    cart.forEach(i=> {
        console.log(i);
        subTotal += i.quantity
    })
    return subTotal;
}

const getUser = (form) => {
    setUserEmail(form);
};

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

const cleanCart = () => {
    setCart ([]);
}

 return (
     <CartContext.Provider value ={{cart, getquantity, addItem, removeItem, cleanCart,getUser,userEmail }} >
         {children}
    </CartContext.Provider>
 )

}
export default CartContextProvider;