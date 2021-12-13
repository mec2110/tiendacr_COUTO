import "./NavBar/NavBar.css";
import React from "react";

const Item= ({product}) => {
  //card 1
    return(
      <div className="list" style={{backgroundColor:"#fee69c"}}> 
      <li >
        <h1 className="titulo">{product.name}</h1>
        <p><img src={product.img} alt={product.name} className="itemImg"/></p>
        
        <p className="datos">
          Categoria: {product.category}
        </p>
         
        <p className="datos">${product.price}</p>
       <button className="btndetalle"> Ver detalle</button>
       </li> 
      </div>
    );
    
  }
  
export default Item;