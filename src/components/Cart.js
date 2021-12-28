import  React, {useContext} from "react";
import "./NavBar/NavBar.css";
import {CartContext} from "./CartContext/CartContext"



const Cart =() => {
    const {cart,removeItem,cleanCart} = useContext (CartContext);
    
    return(
        <table class="table table-striped">
            <thead>
                <tr>
                <th className="datos" scope="col">Foto del producto</th>
                <th  className="datos" scope="col">Descripción</th>
                <th  className="datos" scope="col">Cantidad</th>
                <th> </th>
                </tr>
            </thead>
            <tbody>
        {cart.map(product => {
                        return <tr>
                            <td> <img src={product.item.img} alt={product.name} className="itemImg"/></td>
                            <td className="datos"> {product.item.description} </td>
                            <td className="datos" > Total: {product.quantity} </td>
                            <td className="datos" > Precio x unidad:$ {product.item.price} </td>
                            <td> <button className="btn-itemcount1" onClick={removeItem}> Eliminar item</button></td>
                            </tr>
            })}

            
            </tbody>
            <tbody>
            <button className="btn-itemcount1" onClick={cleanCart}> Cancelar compra </button> 
             <button className="btn-itemcount1" onClick={cart}> Comprar </button> 
            </tbody>
        </table>
    )
}

export default Cart;
