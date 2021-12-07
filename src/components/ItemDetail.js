import React from "react";
import "./NavBar/NavBar.css";

const ItemDetail= ({item}) => {
  //card 1 detalle
  console.log(item)
    return(
      <div style={{backgroundColor:"#9d9ad6", color:"#fff",
        fontSize: "18px"}}> 
        
            
            <h1>{item?item.name:"Nombre de prueba"}</h1>

        <div><img src={item?item.img:"imgtest"} alt={item?item.name:"test"} className="itemImg"/></div>
        
        <div>{item?item.description:"test"}</div>
        <div>{item?item.price:"100"}</div>
        
      </div>
    );
 }
export default ItemDetail;