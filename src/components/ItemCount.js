
import "./NavBar/NavBar.css";
import React, { useEffect, useState } from "react";


const ItemCount = ({stock, initial, onAdd, setQuantity}) => {

const [count,setCount] = useState (initial)

const sumar = () => {
    //Stock 
    if (count <stock){
        setCount (count +1);
       
     }
}

const restar = () => {
    //Stock hasta 1
    if (count >1){
        setCount (count -1);
       
     }
}

/*useEffect(() => {
    setQuantity(count);
  }, [count, setQuantity]);*/



return (
    <div >
       <div>
            <button className="btn-itemcount1" onClick={sumar}> + </button>
            <span className="count"> {count} </span>
            <button className="btn-itemcount2" onClick={restar}> - </button>
        </div>
        <div className="margin-top">
            <button onClick={onAdd} className="btn-itemcount3"> Agregar a mi carrito</button>
            <p className="alertCount"> Quedan disponibles: {stock}</p>
        </div>

    </div>
)
}

export default ItemCount;