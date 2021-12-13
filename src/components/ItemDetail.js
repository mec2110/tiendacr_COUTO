import React from "react";
import "./NavBar/NavBar.css";


const ItemDetail= ({product}) => {
  //card 1 detalle
 
    return(
      <div > 
        
        <h1 className="titulo"> {product.name} </h1>

        <div>
        <img src={product.img} alt={product.name} className="itemImg2"/>
        </div>

        <div className="precio"> Precio: ${product.price}</div>

        <div className="descripcion"> <strong>Descripción del producto:</strong>
        
        <p> {product.description} </p>
         </div>
        
        
      </div>

    );
    
  }
  
export default ItemDetail;

