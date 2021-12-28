import React, { createContext, useState } from "react";
import "./CartContext.css";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const getquantity = () => {
        let subTotal = 0;
        cart.forEach(i=> {
            console.log(i);
            subTotal += i.quantity
        })
        return subTotal;
    }
    

    const addItem = (product, Totalquantity) => {
        const flag = isInCart(product);
        if (flag) {
                let productRepeat = cart.find (i => i.item === product);
                productRepeat.quantity += Totalquantity;
        
                let cartNoRepeat = cart.filter (i => i.item !== product); //todos los elementos que no sean el producto en cuestiòn
                setCart([...cartNoRepeat, productRepeat]);
            } else {
                setCart([...cart, {item: product, quantity: Totalquantity}]);
            }
    addQuantity();
}

const isInCart = (item) => {
    console.log(item);
    return cart.some(product => product.item === item );
}

const removeItem = (itemId) => {
console.log(item);
const item = list.filter ((e)=>{
    return parseInt (e.id) !== parseInt (itemId)
})
}
updateCounter ();


const cleanCart = (quantity) => {
  console.log(quantity);
  const items = list.filter ((e)=>{
    return parseInt (e.id) !== parseInt (quantity)
})
}


return (
    <CartContext.Provider value ={{cart, getquantity, addItem, removeItem, cleanCart }} >
        {children}
   </CartContext.Provider>
)

}
export default CartContextProvider;
