import React, { useState, useContext } from "react";
import "./NavBar/NavBar.css";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext/CartContext"


const ItemDetail = ({ product }) => {

  const { addItem } = useContext(CartContext);
  const [buy, setBuy] = useState(false);

  const [quantity, setQuantity] = useState([0]);

  const btnBuy = (quantity) => {
    setBuy(true);
    setQuantity(quantity);
  }
  const onAdd = () => {
    addItem(product, quantity);
  }


  return (
    <div className="container">

      <h1 className="titulo"> {product.name} </h1>

      <div>
        <img src={product.img} alt={product.name} className="itemImg2" />
      </div>

      <div className="precio"> Precio: ${product.price}</div>

      <div className="descripcion"> <strong>Descripción del producto:</strong>
        <p> {product.description} </p>
      </div>

      <div className="margin">
        {!buy ? <ItemCount stock={product.stock} onAdd={(quantity) => btnBuy(quantity)} /> :
          <button onClick={onAdd} className="btn-itemcount3"> <Link className="link2" to="/cart">Confirmar</Link></button>
        }

        <button className="btn-itemcount2"> <Link to={"/"} className="link3"> Cancelar </Link></button>
      </div>
    </div>
  )
}

export default ItemDetail;