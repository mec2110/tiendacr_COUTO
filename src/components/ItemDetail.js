import React from "react";
import "./NavBar/NavBar.css";
import { Link } from "react-router-dom";
import {useState } from "react";

const InputCount = ({onConfirm,maxQuantity}) => {
  const [count, setCount] = useState (0)

  const handleChange = ({target}) => {
if(target.value <= maxQuantity && target.value >= 0) {
  setCount(target.value)
}
  }
  return (
    <div>
      <input type="number" onChange={handleChange} value={count}/>
      <button onClick = {() => onConfirm(count)}>Agregar al carrito</button>
    </div>
  )
}

const ButtonCount =({onConfirm, maxQuantity})=> {
  const [count, setCount] = useState (0)

  const increment = () => {
if(count < maxQuantity) {
  setCount(count+1)
}
  }

  const decrement = () => {
    if(count > 0) {
      setCount(count-1)
    }
      }

  return (
  
  <div>
  <div className="count"> Tenés {count} productos en tu carrito </div>
 <div>
      <button className="btn-itemcount1" onClick={decrement}> + </button>
      <button className="btn-itemcount2" oonClick={increment}> - </button>
  </div>
  <div>
      <button  onClick={() => onConfirm(count)} className="btn-itemcount3"> Agregar a mi carrito</button>
      
  </div>

</div>
    
  )
}


const ItemDetail= ({product, inputType ="input"}) => {
const Count = inputType === "input" ? InputCount : ButtonCount

const addToCart = (count) => {
  console.log(`Agregado al carrito ${count}`)
}
    return(
      <div > 
        
        <h1 className="titulo"> {product.name} </h1>

        <div>
        <img src={product.img} alt={product.name} className="itemImg2"/>
        </div>

        <div className="precio"> Precio: ${product.price}</div>

        <div className="descripcion"> <strong>Descripción del producto:</strong>
        
        <p> {product.description} </p>
         </div>
         
         <div> 
         <Link to={"/"} className="btndetalle">Ver otros productos </Link>

         </div>
         <div>
          {/*{inputType === "input" ? <InputCount onConfirm={} maxQuantity={}/> : <ButtonCount/>}*/}
          <Count onConfirm={addToCart} maxQuantity={product?.stock}/>
         </div>

        
        
      </div>

    );
    
  }
  
export default ItemDetail;

