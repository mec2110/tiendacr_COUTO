import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {getItems} from "./products";

const ItemListContainer =()=> {
     const [items, setItems] = useState ([])

  useEffect(()=>{
    const list = getItems()
    list.then (list => {
      setItems(list)
    })

    return (() => {
      setItems([])
    })
  }, [])

  const onAdd = () => {
    console.log ("Agregado al carrito")
  
  }
   
  
  return (
      <div>
          <ItemList items = {items} />
          <ItemCount onAdd = {onAdd} stock = {10} initial={1}/>

      </div>
    )
  }

  export default ItemListContainer;


