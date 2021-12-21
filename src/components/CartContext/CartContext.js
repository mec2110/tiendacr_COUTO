import  React, {useState, useEffect} from "react";
import "./NavBar/NavBar.css";
//import {useState } from "react";
import ItemCount from "./ItemCount";

const CartContextProvider = ({context}) => {
    const [cart, setCart]=useState ([]);

    const addItem = (item) => {
        console.log(item)
        setCart([...cart,item]);
    }
 return (
     <CartContext.Provider value ={{
         cart, cantidadTotal,  addItem, removeItem, cleanCart
     }} >
         {context}
    </CartContext.Provider>
 )

}