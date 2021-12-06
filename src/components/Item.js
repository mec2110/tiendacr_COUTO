
import React from "react";

const Item= ({product}) => {
  //card 1
    return(
      <div style={{backgroundColor:"#ccc"}}> 
        <h1>{product.name}</h1>
        <p><img src={product.img} alt={product.name} className="itemImg"/></p>
        
        <p>
          Categoria: [product.category]
        </p>
         
        <p>{product.price}</p>

       <button> Ver detalle</button>
      </div>
    );
    
  }
  
export default Item;