
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "./products";
import "./NavBar/NavBar.css";

const ItemDetailContainer =() => {
const [products, setProducts] = useState ([]);

useEffect (() =>{
fetch ("https://api.mercadolibre.com/sites/MLA/search?q=iphone")
.then (response =>{
return response.json ()}).then(res=>{
 setProducts(res.results.slice(0))
})

useEffect(()=>{
    const list = getItem()
    list.then (list => {
      setProducts(list) // un solo item
    })

    return (() => {
      setProducts([])
    })
  }, [])

return (
<div>
<ItemDetail products={products}/>
</div>
};
}
export default ItemDetailContainer;