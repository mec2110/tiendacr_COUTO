import "./NavBar/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const Item= ({product}) => {
  //card 1
    return(
    <div className="list" style={{backgroundColor:"#fee69c"}}> 
      <li>
        <h1 className="titulo">{product.name}</h1>
        <p><img src={product.img} alt={product.name} className="itemImg"/></p>
        
        <p className="datos">
          Categoria: {product.category}
        </p>
         
        <p className="datos">${product.price}</p>
        <div>
       <Link className="btndetalle" to = {`/item/${product.id}`}  > Ver más </Link>
       </div>
      </li>
    </div> 
    );
    
  }
  
export default Item