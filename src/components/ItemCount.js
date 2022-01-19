import React, { useState } from "react";
import "./NavBar/NavBar.css";


const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial = 1);

    const add = () => {
        //Stock hasta lo que estè disponible
        if (count < stock) {
            setCount(count + 1);

        }
    }

    const substract = () => {

        if (count > initial) {
            setCount(count - 1);

        }
    }

    return (
        <div>
            <div>
                <p className="alertCount"> Podés comprar hasta {stock} unidades</p>
                <p className="alertCount">de esté producto</p>
                <button className="btn-itemcount1" onClick={add}> + </button>
                <span className="count"> {count} </span>
                <button className="btn-itemcount2" onClick={substract}> - </button>
            </div>
            <div>
                <button onClick={() => onAdd(count)} className="btn-itemcount3">Agregar al carrito</button>

            </div>
        </div>
    )
}

export default ItemCount;