import React from "react";
import "./NavBar/NavBar.css";

const ItemDetail= ({item}) => {
  //card 1 detalle
 
    return(
      <div> 
        
        
        <div className="datos2">${item.price}</div>

        <div>
        <img src={item.img} alt={item.name} className="itemImg"/>
        </div>
        
        <div className="datos">{item.description}</div>
        
        
      </div>
    );
 }
export default ItemDetail;