import portada from './portada.jpeg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
import Cart from "./components/Cart";
import Footer from "./components/footer/Footer";
import "./components/NavBar/NavBar.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext/CartContext';
import Dashboard from './components/dashboard';


const App = () => {

  return (
    <CartContextProvider>
      <div className="App">

        <Router>
          <div className="header">
            <NavBar />
          </div>
          <div className="body">
            <div>
              <img src={portada} className="App-portada" alt="portada" />
            </div>

            <div>

              <Routes>

                <Route exact path="/" element={<ItemListContainer />} />

                <Route path="/category/:categoryId"
                  element={<ItemListContainer />} />


                <Route path="/item/:paramId"
                  element={<ItemDetailContainer />} />


                <Route path='/cart'
                  element={<Cart />} />


                <Route path='/count'
                  element={<ItemCount />} />


                <Route path="/dashboard"
                  element={<Dashboard />} />

              </Routes>

            </div>
          </div>

          <Footer />

        </Router>

      </div>
    </CartContextProvider>
  );
}

export default App;
