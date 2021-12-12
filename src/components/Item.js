import "./NavBar/NavBar.css";
import React from "react";

const Item= ({product}) => {
  //card 1
    return(
      <div >
        <ul className="list">
      <li>
        <div>
        <h1 className="titulo">{product.name}</h1>
        </div>
        <div>
        <p><img src={product.img} alt={product.name} className="itemImg"/></p>
        </div>
        <div>
        <p className="datos">
          Categoria: {product.category}
        </p>
         
        </div>
        <div>
        <p className="datos">${product.price}</p>
        </div>
        <div>
       <button className="btndetalle"> Ver detalle</button>
       </div>
       </li> 
       </ul>
      </div>
    );
    
  }
  
export default Item;