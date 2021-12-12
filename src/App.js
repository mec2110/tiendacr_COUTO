
import portada from './portada.jpeg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App"> 

      <header> 
        <NavBar />
        <img src={portada} className="App-portada" alt="portada" />
        
        <div>
          <h1> Desafio 6 corregido </h1>
          <ItemListContainer/>
          <ItemDetailContainer/>

        </div> 
      </header>
      </div>
  );
}

export default App;



