import  React, {useState, useEffect,useContext} from "react";
import "./NavBar/NavBar.css";
import { Link } from "react-router-dom";
import {CartContext} from "./CartContext/CartContext"
//import { getProducts } from "./products";



const Cart =() => {
    const {cart,removeItem,cleanCart} = useContext (CartContext);
    let total= 0;

    return(
        <table class="table table-striped">
            <thead>
                <tr>
                <th className="datos" scope="col">Foto del producto</th>
                <th  className="datos" scope="col">Descripción</th>
                <th  className="datos" scope="col">Cantidad</th>
                <th  className="datos" scope="col">Precio x unidad:</th>
                <th  className="datos" scope="col">Total:</th>
                <th> </th>
                </tr>
            </thead>
            <tbody>
        {cart.map(product => {
                               total += product.item.price * product.quantity

                        return <tr>
                            <td> <img src={product.item.img} alt={product.name} className="itemImg"/></td>
                            <td className="datos"> {product.item.description} </td>
                            <td className="datos" > {product.quantity} unid. </td>
                            <td className="datos" > $ {product.item.price} </td>
                            <td className="datos" >  ${product.item.price * product.quantity}</td>
                            <td> <button className="btn-itemcount1" onClick={() => removeItem (product.item.id)}> X </button></td>
                            </tr>
            })}

            
            </tbody>
            <tbody className="datos">
                <span>
                    
            <div > TOTAL A ABONAR: </div>
            <div> ${total} </div>
            <div>
            <button className="btn-itemcount1" onClick={cleanCart}> Cancelar compra </button> 
             <button className="btn-itemcount1" onClick={cart}> Confirmar Compra </button>
             <button className="btn-itemcount1"> <Link to={"/"} className="link3">Seguir comprando </Link> </button>
             </div>
             </span>
            </tbody>
        </table>
    )
}

export default Cart;