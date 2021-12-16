import React from "react";
import "./NavBar/NavBar.css";
import { Link } from "react-router-dom";
//import {useState } from "react";
import ItemCount from "./ItemCount";


const ItemDetail= ({product}) => {
  const onAdd = () => {
    console.log ("Agregado al carrito")
    }

  return(
      <div className="container"> 
        
        <h1 className="titulo"> {product.name} </h1>

        <div>
        <img src={product.img} alt={product.name} className="itemImg2"/>
        </div>

        <div className="precio"> Precio: ${product.price}</div>

        <div className="descripcion"> <strong>Descripción del producto:</strong>
        
        <p> {product.description} </p>
         </div>
         
         <div> 
         <Link to={"/"} className="btndetalle">Ver otros productos </Link>

         </div>
         
          <div className="margintop">
          <ItemCount onAdd = {onAdd} stock = {product.stock} initial={1} />
          </div>

</div>

        
        
      

)
}
  
export default ItemDetail;

