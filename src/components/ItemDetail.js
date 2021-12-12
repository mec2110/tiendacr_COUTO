import React from "react";
import "./NavBar/NavBar.css";


const ItemDetail= ({Item}) => {
  //card 1 detalle
 
    return(
      <div className="row" style={{backgroundColor:"#fee69c"}}> 
        
        <h1 className="titulo">{Item.name}</h1>
        <div className="datos2">${Item.price}</div>

        <div>
        <img src={Item.img} alt={Item.name} className="itemImg2"/>
        </div>
        
        <div className="datos">{Item.description}</div>
        
        
      </div>

    );
    
  }
  
export default ItemDetail;

