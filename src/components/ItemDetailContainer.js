import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "./products";
import "./NavBar/NavBar.css";

const ItemDetailContainer =() => {
	const [products, setProducts] = useState ([])

	useEffect(()=>{
		const list = getItem()
		list.then (list => {
		  setProducts(list) // un solo item en detalle 
		})
	
		return (() => {
		  setProducts([])
		})
	  }, [])

		return (
			<div>
			<ItemDetail products={products}/>
			</div>
			)
	
}
export default ItemDetailContainer;