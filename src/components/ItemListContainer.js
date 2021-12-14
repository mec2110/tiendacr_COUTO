import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./NavBar/NavBar.css";
import { getProducts } from "./products";
import { getCategoryById } from "./products";
import { useParams} from "react-router-dom";


//import { useParams} from "react-router-dom";



const ItemListContainer =()=> {
     const {categoryId} = useParams()
     const [products, setProducts] = useState ([]);
     const [category,setCategory ] = useState ({});

  useEffect(()=>{

    console.log(categoryId)

    const list = getCategoryById(categoryId)
    list.then (category => {
      setCategory(category)
    })

    return (() => {
      setCategory([])
    })
  }, [categoryId])

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
        <ItemList products= {products} category={category} />
        <ItemCount stock = {10} initial={1}/> {/*le saque  onAdd = {onAdd} */}

      </div>
    )
  }

  export default ItemListContainer;
