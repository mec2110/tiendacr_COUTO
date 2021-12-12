import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "./products";
import "./NavBar/NavBar.css";

const ItemDetailContainer =() => {
	const [product, setProduct] = useState ([])

	useEffect(()=>{
		const item = getItem()

		item.then (item => {
		  setProduct(item) // un solo item en detalle 
		}).catch (err => {
			console.log(err)
		})
	
		return (() => {
		  setProduct()
		})
	  }, [])

		return (
			<div className="ItemDetailContaner">
			<ItemDetail product={product}/>
			</div>
			)
	
}
export default ItemDetailContainer;