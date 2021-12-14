import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProductById } from "./products";
import "./NavBar/NavBar.css";
import { useParams} from "react-router-dom";

const ItemDetailContainer = ()=> {
	const [product, setProduct] = useState ({});
	const { paramId } = useParams()

  console.log( paramId)

	useEffect(() => {
		getProductById(paramId).then(item => {
			setProduct(item) // un solo item en detalle segùn la id
		}).catch(err => {
			console.log(err)
		})
	
		return (() => {
			setProduct()
		})

	  }, [paramId])

		return (
			<div>
			<ItemDetail product={product}/>
			</div>
			)
	
}
export default ItemDetailContainer;