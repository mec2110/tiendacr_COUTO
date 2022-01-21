import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./NavBar/NavBar.css";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!categoryId) {
      setLoading(true)
      getDocs(collection(db, "Items")).then((querySnapshot) => {
        const products = querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        setProducts(products)
      }).catch((error) => {
        console.log("Error searching items", error)
      }).finally(() => {
        setLoading(false)
      })
    } else {

      setLoading(true)
      getDocs(query(collection(db, "Items"), where("category", "==", categoryId))).then((querySnapshot) => {
        console.log(querySnapshot)
        const products = querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        setProducts(products)
      }).catch((error) => {
        console.log("Error searching items", error)
      }).finally(() => {
        setLoading(false)
      })
    }


    return (() => {
      setProducts([])
    })
  }, [categoryId])

  if (loading) {
    return <div className="spinner-border text-warning"></div>

  }

  return (
    <div className="ItemListContainer">
      <ItemList products={products} />

    </div>
  )
}

export default ItemListContainer;