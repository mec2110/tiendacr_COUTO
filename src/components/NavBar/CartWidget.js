// icono carrito de compras

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
  
    const style = {
      color : "white",
      padding: 20,
      fontSize: 15,
    }
  return (
    <div style ={style}>
     <FontAwesomeIcon icon="./shopping-cart"/>  <span> 1 </span> 
    </div>
    );
  }
  export default CartWidget;

