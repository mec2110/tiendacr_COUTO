import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import "./NavBar/NavBar.css";
import { useParams} from "react-router-dom";
import { getDoc, doc} from "firebase/firestore";
import { db } from "../services/firebase";


const ItemDetailContainer = ()=> {
	const [product, setProduct] = useState ({});
	const [loading, setLoading] = useState (true);
    const { paramId } = useParams()

  console.log( paramId)

	useEffect(() => {
		setLoading (true)
			getDoc (doc(db, "Items", paramId)).then((QuerySnapshot) => {
				const product ={id:QuerySnapshot.id,...QuerySnapshot.data()}
				setProduct(product)
			}).catch((error)=> {
				console.log("Error searching item",error)
			}).finally(() => {
				setLoading (false)
			}) 
		
		return (() => {
			setProduct()
		})

	  }, [paramId]) 
	  if(loading){
		return <h1> Loading ... </h1>
	  }

		return (
			<div>
				
			<ItemDetail product={product}/>
			</div>
			)
	
}
export default ItemDetailContainer;
