import React from "react";
import "./NavBar/NavBar.css";
import { Link } from "react-router-dom";
//import {useState } from "react";
import ItemCount from "./ItemCount";


const ItemDetail= ({product}) => {

  const onAdd = (quantityToAdd) => {
    console.log ("Agregado al carrito:" + quantityToAdd)
    }

  return (
      <div className="container"> 
        
        <h1 className="titulo"> {product.name} </h1>

        <div>
        <img src={product.img} alt={product.name} className="itemImg2"/>
        </div>

        <div className="precio">
          Precio: ${product.price}
        </div>

        <div className="descripcion">
          <strong>Descripción del producto:</strong>
          <p> {product.description} </p>
        </div>
         
        <div className="margin-top"> 
           <Link to={"/"} className="btndetalle">Ver otros productos </Link>
        </div>
         
        <footer className="margin-top">
            <ItemCount onAdd = {onAdd()} stock = {product.stock} initial={1} />
        </footer>
      </div>
)
  }

  export default ItemDetail;

