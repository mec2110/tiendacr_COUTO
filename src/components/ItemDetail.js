import React from "react";
import "./NavBar/NavBar.css";

const ItemDetail= ({item}) => {
  //card 1 detalle
    return(
      <div style={{backgroundColor:"#9d9ad6", color:"#fff",
        fontSize: "18px"}}> 

        <h1>{item.name}</h1>
        <div><img src={item.img} alt={item.name} className="itemImg"/></div>
        <div>{item.description}</div>
        <div>{item.price}</div>

      </div>
    );
    
  }
  
export default ItemDetail;