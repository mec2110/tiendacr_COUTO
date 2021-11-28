import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer =()=>
{
  const onAdd = () => {
    console.log ("Agregado al carrito")
  
  }

    return (
      <div>
          <ItemCount onAdd = {onAdd} stock = {10}/>
      </div>
    )
  }

  export default ItemListContainer;

 /* function ItemListContainer (props){
    return <h2>I am a { props.brand }!</h2>;
  }

<ItemCount stock="5" initial="1"/>*/