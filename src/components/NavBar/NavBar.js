import logoCR from './logoCR.png';
import "./NavBar.css";
import CartWidget from "./CartWidget";




const NavBar = () => {
        return (

  <nav className="navbar navbar-expand-sm navbar-dark bg-dark2">
     <div className="container-fluid" >
       <a className="navbar-brand" href="index.html">
       <img src={logoCR}  className="img-responsive" alt="logoCR" height="50px"/>
       </a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="home.html">Quienes somos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="productos.html">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contacto.html">Contacto</a>
        </li>  
      </ul>
      </div>
      <div> <CartWidget/> </div>
    </div>
  </nav>
  
                ) ;     
}

export default NavBar

/* <img src={logoCR} className="App-logo" alt="logo2"/> */