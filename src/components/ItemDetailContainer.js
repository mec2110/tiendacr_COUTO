import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "./products";
import "./NavBar/NavBar.css";

const ItemDetailContainer =() => {
	const [product, setProduct] = useState ([])

	useEffect(()=>{
		const list = getItem()
		list.then (list => {
		  setProduct(list) // un solo item en detalle 
		})
	
		return (() => {
		  setProduct([])
		})
	  }, [])

		return (
			<div>
			<ItemDetail product={product}/>
			</div>
			)
	
}
export default ItemDetailContainer;