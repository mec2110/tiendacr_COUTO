
import portada from './portada.jpeg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
import React, {useState } from "react";
import "./components/NavBar/NavBar.css";

const App = () => {
  const [route,setRoute] = useState ("list")
  console.log(route)

  return (
    <div className="App"> 

      <header> 
        <NavBar />
        <div>
          <button onClicK={ () => setRoute ("list")}>list</button>
          <button onClicK={ () => setRoute ("detail")}>detail</button>
          <button onClicK={ () => setRoute ("count")}>count</button>
        </div>
      </header>
      <body>
        <div>
        <img src={portada} className="App-portada" alt="portada" />
        </div>

        <div>
          <h6> Primer entrega del Proyecto</h6>
          {route==="list" && <ItemListContainer/>}
          {route==="detail" && <ItemDetailContainer/>}
          {route==="count" && <ItemCount />}
        </div> 
      </body>
      </div>
  );
}

export default App;



