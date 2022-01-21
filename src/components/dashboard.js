import "./NavBar/NavBar.css";
import { Link } from "react-router-dom";
import compra from './compra.png';

const Dashboard= () => {
    return (
        <div className="datos" style={{ marginTop: '50px'}}>
            <div  className='padding'>
                <img src={compra}  alt="Carrito vacío" />
             </div>
            <p>
               ¡Gracias por elegirnos! En breve recibirás un mail para acordar el método de pago y coordinar
               la entrega. Si tenés dudas escribinos!
             </p>
             <p>  
               Si te quedaste con ganas de más, podés seguir comprando acá
            </p >
            <button  style={{ margin: '25px 0px',padding: "5px" }} className="btn-itemcount1"> <Link to={"/"} className="link3">Seguir comprando </Link> </button>

        </div>
    )

};

export default Dashboard;