import  React, {useState, useEffect, useContext} from "react";
import "./NavBar/NavBar.css";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {CartContext} from "./CartContext/CartContext"


const ItemDetail= ({product}) => {
  const [stock, setStock] = useState(0);

  const {addItem} = useContext (CartContext);

  const [buy, setBuy]= useState (false);
  const [quantity, setQuantity]= useState (0);

 // const onAdd = (quantityToAdd) => {
   // console.log("Agregado al carrito la cantidad de: " + quantityToAdd)
    //console.log("Stock inicial: " + product.stock)
    //product.stock = product.stock - quantityToAdd
    //setStock(product.stock)
  //}

  useEffect(()=>{
    setStock(product.stock)
    console.log("STOCK: " + stock)
  })

  const btnBuy = (quantity) => {
    setBuy (true);
    setQuantity(quantity);
  }
  const btnPurchase = () => {
    addItem (product, quantity);
  }

  return(
      <div className="container"> 
        
        <h1 className="titulo"> {product.name} </h1>

        <div>
        <img src={product.img} alt={product.name} className="itemImg2"/>
        </div>

        <div className="precio"> Precio: ${product.price}</div>

        <div className="descripcion"> <strong>Descripción del producto:</strong>
        
        <p> {product.description} </p>
         </div>
         
         <div className="margin-top"> 
            <Link to={"/"} className="link2"> Ver otros productos </Link>
         </div>
         
          <div className="margin-top">
           {!buy ? <ItemCount onAdd = {(quantity) => btnBuy (quantity)} />: 
           <button onClick={btnPurchase} className="btn-itemcount3"> <Link to= "/cart"> Comprar </Link></button>
           }
           </div>

      </div>
  )
}
  
export default ItemDetail;