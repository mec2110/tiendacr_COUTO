import  React, {useState, useContext} from "react";
import "./NavBar/NavBar.css";
import { Link } from "react-router-dom";
import {CartContext} from "./CartContext/CartContext"
import {addDoc, collection, getDoc} from "firebase/firestore";
import {getFirestore, doc, Timestamp, writeBatch} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';



const Cart =() => {
    const {cart,removeItem,cleanCart,getUser} = useContext (CartContext);
    let total= 0;
    let navigate = useNavigate();

    const [processingOrder, setProcessingOrder]= useState(false)
    const [form, getForm ]= useState ({
        address:"",
        mail:"",
        name:"",
    })

    const fillForm = (e) => {
        const { name, value } = e.target;
        getForm({
            ...form,
            [name]: value,
        });
    };


    const confirmOrder = () => {
        getUser(form);
        setProcessingOrder(true)

        const db = getFirestore();

        const objOrder = {
            buyer: { email: form.mail, nombre: form.name, direccion: form.address },
            items:cart,
            total: total,
            date: Timestamp.fromDate(new Date())
        };

const batch = writeBatch(db)
const outOfStock = []

objOrder.items.forEach((product) => {
    getDoc(doc (db, "Items", product.item.id)).then((documentSnapShot) => {
        if(documentSnapShot.data().stock >= product.quantity) {
            batch.update(doc(db, "Items", documentSnapShot.id), {
                stock:documentSnapShot.data().stock - product.quantity,
            });
        } else {
            outOfStock.push ({id: documentSnapShot.id, ...documentSnapShot.data()});
        }
    });
});

if (outOfStock.length === 0) {
    addDoc(collection (db, "orders"), objOrder).then(({id}) => {
        batch.commit().then(() => {
           console.log (`El nùmero de su compra es  ${id}`)
        })
    }).catch((error)=> {
        console.error (`error`);
    }).finally(() => {
        setTimeout(() => {
            setProcessingOrder(false);
            navigate('/dashboard');
            cleanCart();
            
        },2000);
    });
}
   
    }

    if(processingOrder) {
        return <h2 className="datos"> Se está procesando su orden, no salga de la página...</h2>
    }

    if(!cart.items === 0) {
        return (
            <div>
                <h1 > Cart </h1>
                <h2 className="datos"> No hay productos en su carrito </h2>
            </div>
        )
    }

    return(
        <table class="table table-striped">
            <thead>
                <tr>
                <th className="datos" scope="col">Foto del producto</th>
                <th  className="datos" scope="col">Descripción</th>
                <th  className="datos" scope="col">Cantidad</th>
                <th  className="datos" scope="col">Precio x unidad:</th>
                <th  className="datos" scope="col">Total:</th>
                <th> </th>
                </tr>
            </thead>
            <tbody>
        {cart.map(product => {
                               total += product.item.price * product.quantity

                        return <tr>
                            <td> <img src={product.item.img} alt={product.name} className="itemImg"/></td>
                            <td className="datos"> {product.item.description} </td>
                            <td className="datos" > {product.quantity} unid. </td>
                            <td className="datos" > $ {product.item.price} </td>
                            <td className="datos" >  ${product.item.price * product.quantity}</td>
                            <td> <button className="btn-itemcount1" onClick={() => removeItem (product.item.id)}> X </button></td>
                            </tr>
            })}

            
            </tbody>
            <tbody className="datos" >
                <span >
                    
            <div > TOTAL A ABONAR: </div>
            <div> ${total} </div>
            <div>

            {/*botones*/}
            <button className="btn-itemcount1"> <Link to={"/"} className="link3">Seguir comprando </Link> </button>

            <button className="btn-itemcount1" onClick={cleanCart}> Cancelar compra </button> 
             
            <div className="datos"> Antes de confirmar tu compra ingresá estos datos, asi podemos contactarte por mail para finalizarla:</div>
            {!processingOrder ? (
                        <form
                            method="POST"
                            onSubmit={confirmOrder}
                            style={{ margin: '15px 0px',padding: "5px" }}
                        >
                           <input
                                onChange={fillForm}
                                type="text"
                                name="name"
                                placeholder="nombre"
                                style={{ margin: '5px' }}
                            />
                             <input
                                onChange={fillForm}
                                type="email"
                                name="mail"
                                placeholder="email"
                                style={{ margin: '5px' }}
                            />
                            <input
                                onChange={fillForm}
                                type="text"
                                name="address"
                                placeholder="Ingresá tu dire"
                                style={{ margin: '5px' }}
                            />
                             <div>
                            <button
                                disabled={
                                    cart?.length === 0 ||
                                    form.name === '' ||
                                    form.mail === ''||
                                    form.address=== ''
                             }
                            className="btn-itemcount1" >

                                Confirmar Compra
                            </button>
                            </div> 
                        </form>
                    ) : (
                        <span className="datos">
                            Estamos generando su orden, en breve te contàctaremos por mail para finalizar tu compra...
                        </span>
                    )}

             </div>
             </span>
            </tbody>
        </table>
    )
}

export default Cart;