import portada from './portada.jpeg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
import Cart from "./components/Cart";
import Footer from "./components/footer/Footer";
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
          <h1> Sincronizando ItemCount</h1>
          <Switch>
            <Route exact path="/">
               <ItemListContainer/>
            </Route>

            
           <Route exact path="/category/:categoryId">
               <ItemListContainer/>
            </Route>

           <Route path="/item/:paramId">
             <ItemDetailContainer/>
           </Route>
           
            <Route path="/count">
             <ItemCount />
            </Route>

            <Route path='/cart'>
		      		<Cart />
		      	</Route>

          </Switch>
        </div> 
      </body>

      <Footer />
     
    </BrowserRouter> 

    
    </div>
  );
}

export default App;



