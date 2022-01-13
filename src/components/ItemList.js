import Item from "./Item";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {db} from "../services/firebase";
import { getDocs, collection } from "firebase/firestore"





const ItemList = ({products}) =>{
  const [category,setSubcategories] = useState ([])

  useEffect(()=>{
    
    getDocs(collection(db, "subCategories")).then((querySnapshot) =>{
      const subCategories = querySnapshot.docs.map (doc => {
        return {id: doc.id, ...doc.data()}
      })
      
      setSubcategories(subCategories)
    })
  },[])
       
   return (

        <div>

        <div className="margin-top"> <p>Ver todos los productos de:</p>
          {category.map(cat => <Link key={cat.id} className="btnfiltro" to = {`/subCategory/${cat.id}`}> {cat.description} </Link> )}
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
