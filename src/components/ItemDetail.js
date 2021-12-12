import React from "react";
import "./NavBar/NavBar.css";


const ItemDetail= ({product}) => {
  //card 1 detalle
 
    return(
      <div > 
        
        <h1 className="titulo">{product.name}</h1>
        <div className="datos2">Precio: ${product.price}</div>

        <div>
        <img src={product.img} alt={product.name} className="itemImg2"/>
        </div>
        
        <div className="datos">Descripción del producto
        <p> {product.description} </p>
         </div>
        
        
      </div>

    );
    
  }
  
export default ItemDetail;

