import  React, {useState, useEffect} from "react";
import "./NavBar/NavBar.css";
import { Link } from "react-router-dom";
//import {useState } from "react";
import ItemCount from "./ItemCount";


const ItemDetail= ({product}) => {
  const [stock, setStock] = useState(0)
    
  const onAdd = (quantityToAdd) => {
    console.log("Agregado al carrito la cantidad de: " + quantityToAdd)
    console.log("Stock inicial: " + product.stock)
    product.stock = product.stock - quantityToAdd
    setStock(product.stock)
  }

  useEffect(()=>{
    setStock(product.stock)
    console.log("STOCK: " + stock)
  })

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
         
         <div className="margin-top"> 
            <Link to={"/"} className="btndetalle">Ver otros productos </Link>
         </div>
         
          <div className="margin-top">
            <ItemCount onAdd={onAdd} stock={stock} initial={1} />
          </div>

      </div>
  )
}
  
export default ItemDetail;