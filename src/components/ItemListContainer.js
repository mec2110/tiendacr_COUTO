import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./NavBar/NavBar.css";
import { getProducts } from "./products";
import { useParams} from "react-router-dom";


//import { useParams} from "react-router-dom";



const ItemListContainer =()=> {
     const {categoryId} = useParams()
     const [products, setProducts] = useState ([]);

  useEffect(()=>{
    const item = getProducts(categoryId).then (item => {
         setProducts(item) // un solo item por categoria
       }).catch(err =>{
         console.log(err)
       })
   
       return (() => {
         setProducts([])
       })
     }, [categoryId])
   
     /*const onAdd = () => {
       console.log ("Agregado al carrito")
     
     }*/
  
  return (
      <div className="ItemListContainer">
        <ItemList products= {products}/>
        <ItemCount stock = {10} initial={1}/> {/*le saque  onAdd = {onAdd} */}

      </div>
    )
  }

  export default ItemListContainer;
