import logoCR from './logoCR.png';
import "./NavBar.css";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import  React, {useContext,useEffect, useState } from "react";
import {db} from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore"



const NavBar = () => {
  const [categories,setCategories] = useState ([])

  useEffect(()=>{
    
    getDocs(collection(db, "Categories")).then((querySnapshot) =>{
      const Categories = querySnapshot.docs.map (doc => {
        return {id: doc.id, ...doc.data()}
      })
      
      setCategories(Categories)
    })
  },[])
     const { getquantity } = useContext(CartContext);

        return (

  <nav className="navbar navbar-expand-sm navbar-dark bg-dark2">
     <div className="container-fluid" >

     <Link to={"/"} className="link">
       <img src={logoCR}  className="img-responsive" alt="logoCR" height="50px"/>

       </Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        
        <li className="nav-item">
          <Link to={"/"} className="link"> Todos los productos</Link>
        </li>
        
        <li className="nav-item">
        {categories.map(cat => <Link key={cat.id} className="link" to = {`/category/${cat.id}`}> {cat.description} </Link> )}
        </li>
        
        <li className="nav-item">
        <Link to={"/cart"} className="link">Mi Carrito</Link>
        </li> 

      </ul>
      </div>

      <div> 
      <Link to = "/cart"><CartWidget/></Link>
         <span className="getquantity">{ getquantity()}</span>  
      </div>

    </div>
  </nav>
  
  ) ;     
}

export default NavBar
