import logoCR from './logoCR.png';
import "./NavBar.css";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import  React, {useContext} from "react";




const NavBar = () => {

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
         <Link to={"/"} className="link">Productos</Link>
        </li>
        <li className="nav-item">
        <Link to={"/item/2"} className="link">Detalle</Link>
        </li>
        <li className="nav-item">
        <Link to={"/category"} className="link">Categorías</Link>
        </li>
        <li className="nav-item">
        <Link to={"/cart"} className="link">Ver Carrito</Link>
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
