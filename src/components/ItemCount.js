import  React, {useState} from "react";
import "./NavBar/NavBar.css";


const ItemCount = ({stock, initial, onAdd}) => {

const [count,setCount] = useState (1)
//const [stock,setStock] = useState ()

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

/*const quantity = () => {
    //Stock hasta 1
    if (stock=0){
        setCount ("No hay stock");
       
     }
}*/



return (
    <div >
       <div>
            <button className="btn-itemcount1" onClick={sumar}> + </button> <span className="count"> {count} </span>
            <button className="btn-itemcount2" onClick={restar}> - </button>
        </div>
        <div>
            <button onClick={onAdd} className="btn-itemcount3"> Agregar a mi carrito</button>
            <p className="alertCount"> Quedan disponibles: {stock}</p>
        </div>

    </div>
)
}

export default ItemCount;