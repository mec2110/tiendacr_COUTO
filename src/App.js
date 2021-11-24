import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";





function App() {
  return (
    <div className="App"> 

      <header>
        <NavBar />
        <ItemListContainer greeting="Te damos la bienvenida curios@"/>
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Desafio 3 - creando componentes
        </p> 
      </header>
      </div>
  );
}

export default App;

