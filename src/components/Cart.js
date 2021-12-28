import  React, {useContext} from "react";
import "./NavBar/NavBar.css";
import {CartContext} from "./CartContext/CartContext"



const Cart =() => {
    const {cart} = useContext (CartContext);

    
    return(
        <div className="margin-top">
        <h1 className="titulo"> Próximamente cart </h1>
        {cart.map(product => {
                        return <tr>
                            <td> {product.item.image}</td>
                            <td> {product.item.description} </td>
                            <td> {product.quantity} </td>
                        </tr>
            })}
        </div>
    )
}

export default Cart 
