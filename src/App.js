import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";






function App() {
  return (
    <div className="App"> 

      <header> 
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        
       
        <p>
          <h6>desafio 5 </h6>
          <ItemListContainer/>
        </p> 
      </header>
      </div>
  );
}

export default App;



