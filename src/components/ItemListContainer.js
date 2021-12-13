import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./NavBar/NavBar.css";
import { getProducts } from "./products";
//import { useParams} from "react-router-dom";



const ItemListContainer =()=> {
     const [products, setProducts] = useState ([])
//const { categoryId } = useParams ()
  useEffect(()=>{
    const list = getProducts()
    list.then (list => {
      setProducts(list) // un solo item
    })

    return (() => {
      setProducts([])
    })
  }, [])

  /*const onAdd = () => {
    console.log ("Agregado al carrito")
  
  }*/
   
  
  return (
      <div className="ItemListContainer">
        <ItemList products= {products} />
        <ItemCount stock = {10} initial={1}/> {/*le saque  onAdd = {onAdd} */}

      </div>
    )
  }

  export default ItemListContainer;
