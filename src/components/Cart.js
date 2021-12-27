import  React, {useState, useContext} from "react";
import "./NavBar/NavBar.css";
import CartContext from "./CartContext/CartContext.js"



const Cart =() => {
    const {cart} = useContext (CartContext);

    
    return(
        <div className="margin-top">
        <h1 className="titulo"> Próximamente cart </h1>
        </div>
    )
}

export default Cart 
