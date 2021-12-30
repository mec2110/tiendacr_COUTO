import  React, {useState} from "react";
import "./NavBar/NavBar.css";


const ItemCount = ({stock, initial, onAdd}) => {
     
    const [count, setCount] = useState (initial=1);
    //const [stock,setStock] = useState ()

    const sumar = () => {
        //Stock hasta lo que estè disponible en el array de products
        if (count < stock){
            setCount (count + 1);
        
        }
    }

    const restar = () => {
        
        if (count > initial){
            setCount (count - 1);
        
        }
    }

return (
        <div>
            <div>
                <button className="btn-itemcount1" onClick={sumar}> + </button> 
                <span className="count"> {count} </span>
                <button className="btn-itemcount2" onClick={restar}> - </button>
            </div>
            <div>
            <button onClick={() => onAdd(count)} className="btn-itemcount3"> Agregar a mi carrito</button>                
            <p className="alertCount"> Quedan disponibles: {stock}</p>
            </div>
        </div>
    )
}

export default ItemCount;