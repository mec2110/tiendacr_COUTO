
import React, {useContext } from "react";
import "./NavBar/NavBar.css";
import { CartContext } from "./CartContext/CartContext"


const CartDetail = () => {
    const { cart, removeItem } = useContext(CartContext);
    let total = 0;

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th className="datos" scope="col">Foto del producto</th>
                    <th className="datos" scope="col">Descripción</th>
                    <th className="datos" scope="col">Cantidad</th>
                    <th className="datos" scope="col">Precio x unidad:</th>
                    <th className="datos" scope="col">Total:</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {cart.map(product => {

                    total += product.item.price * product.quantity

                    return <tr >
                        <td> <img src={product.item.img} alt={product.name} className="itemImg" /></td>
                        <td className="datos"> {product.item.description} </td>
                        <td className="datos" > {product.quantity} unid. </td>
                        <td className="datos" > $ {product.item.price} </td>
                        <td className="datos" >  ${product.item.price * product.quantity}</td>
                        <td> <button className="btn-itemcount1" onClick={() => removeItem(product.item.id)}> X </button></td>
                    </tr>
                })}
                 
             
            </tbody>
            <tbody className="tabla2">
           <tr> TOTAL A ABONAR: $ {total} </tr>
            </tbody>
        </table >
    )
}

export default CartDetail;