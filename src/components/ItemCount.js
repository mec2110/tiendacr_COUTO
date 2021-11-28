import  React, {useState} from "react";
import "./NavBar/NavBar.css";


const ItemCount = ({stock, initial, onAdd}) => {

const [count,setCount] = useState (1)


const sumar = () => {
    //Stock hasta 10
    if (count <10){
        setCount (count +1);
       
     }
}

const restar = () => {
    //Stock hasta 1
    if (count >1){
        setCount (count -1);
       
     }
}



return (
    <div className ="fondo">
        <div className="count"> Tenés {count} productos en tu carrito </div>
       <div>
            <button className="btn-itemcount1" onClick={sumar}> + </button>
            <button className="btn-itemcount2" onClick={restar}> - </button>
        </div>
        <div>
            <button onClick={onAdd} className="btn-itemcount3"> Agregar a mi carrito</button>
            <h6> Quedan disponibles: {stock}</h6>
        </div>

    </div>
)
}

export default ItemCount;