import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";






function App() {
  return (
    <div className="App"> 

      <header> 
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        
       
        <p>
          <h6>desafio 4 </h6>
          <ItemListContainer/>
          <ItemDetailContainer/>
        </p> 
      </header>
      </div>
  );
}

export default App;



