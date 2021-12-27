import Item from "./Item";
import React, { useEffect, useState } from "react";
import { getCategories } from "./products";
import { Link } from "react-router-dom";
import {db} from "../../services/firebase";
import {getDocs, collection, QuerySnapshot} from "firebase/firestore"





const ItemList = ({products,category}) =>{
  
  const [categories,setCategories] = useState ([])
const []
  useEffect(()=>{
    getDocs(collection(db, "Categories")).then((QuerySnapshot) =>{
      const categories = QuerySnapshot.docs.map (doc => {
        return {id: doc.id, ...doc.data()}
      })
      console.log(categories)
      setCategories(categories)
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