import  React, {useState, useContext} from "react";
import "./NavBar/NavBar.css";
import {CartContext} from "./CartContext/CartContext.js"



const Cart =() => {
    const {cart} = useContext (CartContext);

    
    return(
        <div className="margin-top">
            <ul>
                <li> Imagen</li>
                <li>Descripción</li>
                <li>Cantidad</li>
            </ul>
            {cart.map (product => {
                return <ul>
                      <li>
                      <img src={product.item.img} alt={product.name} className="itemImg"/>
                      </li>
                      <li>
                          {product.item.description}
                      </li>
                      <li>
                          {product.quantity}
                      </li>
                </ul>
            })} <h1 className="titulo"> Próximamente cart </h1>
        </div>
    )
}

export default Cart 
