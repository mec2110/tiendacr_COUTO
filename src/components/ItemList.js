import Item from "./Item";
import React, { useEffect, useState } from "react";
//import { getCategories } from "./products";
import { Link } from "react-router-dom";
import {db} from "../services/firebase";
import { getDocs, collection } from "firebase/firestore"





const ItemList = ({products}) =>{
  
  const [categories,setCategories] = useState ([])

  useEffect(()=>{
    
    getDocs(collection(db, "Categories")).then((querySnapshot) =>{
      const Categories = querySnapshot.docs.map (doc => {
        return {id: doc.id, ...doc.data()}
      })
      console.log(Categories)
      setCategories(Categories)
    })
  },[])
       
   return (

        <div>

        <div className="margin-top"> <p>Categorías:</p>
          {categories.map(cat => <Link key={cat.id} className="btnfiltro" to = {`/category/${cat.id}`}> {cat.description} </Link> )}
        </div>
          
        <ul>
          
          {products.map
          (product => <Item key={product.id} product={product}/>)
          } 
        </ul>

        

        </div>

    );
}

export default ItemList
