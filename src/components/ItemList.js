import Item from "./Item";
import React, { useEffect, useState } from "react";
import { getCategories } from "./products";
import { Link } from "react-router-dom";





const ItemList = ({products,category}) =>{
  
  const [categories,setCategories] = useState ([])

  useEffect(()=>{
    getCategories().then(categories => {
      setCategories(categories)
    })
       },[])
       console.log(categories)

   return (

        <div>
          {categories.map(cat => <Link key={cat.id} className="btndetalle" to = {`/category/${cat.id}`}> {cat.description} </Link> )}
        
        <ul>
          
          {products.map
          (product => <Item key={product.id} product={product}/>)
          } 
        </ul>

        </div>

    );
}

export default ItemList