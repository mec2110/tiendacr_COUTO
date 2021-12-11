
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
        <img src={portada} className="App-logo" alt="portada" />
        
        <div>
          <h6> Desafio 6 </h6>
          <ItemListContainer/>
          <ItemDetailContainer/>
        </div> 
      </header>
      </div>
  );
}

export default App;



