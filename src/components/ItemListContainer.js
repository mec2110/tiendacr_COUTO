import React, { useEffect, useState } from "react";
//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./NavBar/NavBar.css";
//import { getProducts } from "./products";
import { useParams} from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


//import { useParams} from "react-router-dom";



const ItemListContainer =()=> {
     const {categoryId} = useParams()
     const [products, setProducts] = useState ([]);
     const [loading, setLoading] = useState (true)

  useEffect(() => {
    if (!categoryId) {
      setLoading(true)
      getDocs(collection(db, "Items")).then((QuerySnapshot) => {
      console.log(QuerySnapshot)
      const products = QuerySnapshot.docs.map (doc => {
       console.log(doc)
       return { id:doc.id,...doc.data()}
     })
     setProducts(products)
   }).catch((error) => {
     console.log ("Error searching items", error)
   }).finally(() => {
     setLoading (false)
   })
  } else{

    setLoading(true)
    getDocs(query(collection(db, "Items"), where ("category", "==","categoryId"))).then((QuerySnapshot) => {
      console.log(QuerySnapshot)
      const products = QuerySnapshot.docs.map (doc => {
       console.log(doc)
       return { id:doc.id,...doc.data()}
     })
     setProducts(products)
   }).catch((error) => {
     console.log ("Error searching items", error)
   }).finally(() => {
     setLoading (false)
   })
  }

   
       return (() => {
         setProducts([])
       })
     }, [categoryId])
   
     if(loading){
       return <h1> Loading ... </h1>
     }
  
  return (
      <div className="ItemListContainer">
        <ItemList products= {products}/>

      </div>
    )
  }

  export default ItemListContainer;
