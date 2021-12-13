import portada from './portada.jpeg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
//import React, {useState } from "react";
import "./components/NavBar/NavBar.css";
import {BrowserRouter, Switch, Route} from"react-router-dom";

const App = () => {
 
  return (
    <div className="App"> 
      
    <BrowserRouter> 
      <header>
        <NavBar/>
      </header>
      <body>
        <div>
        <img src={portada} className="App-portada" alt="portada" />
        </div>

        <div>
          <h1> Primer entrega del Proyecto</h1>
          <Switch>
            <Route exact path="/">
               <ItemListContainer/>
            </Route>

           <Route path="/detail">
             <ItemDetailContainer/>
           </Route>

           <Route path="/count">
             <ItemCount />
            </Route>

          </Switch>
        </div> 
      </body>
     
    </BrowserRouter> 
    </div>
  );
}

export default App;



