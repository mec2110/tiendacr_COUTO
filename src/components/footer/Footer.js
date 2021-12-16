import logoCR from './logoCR.png';
import {Link} from "react-router-dom";
import "./Footer.css";






const Footer = () => {

        return (  
            <div className="fondo" >

               <Link to={"/"} className="link">
                  <img src={logoCR}  className="img-responsive" alt="logoCR" height="50px"/>
               </Link>  curiousrabbit15@gmail.com / @curiousrabbitdesign
            </div>
            ) ;     
}

export default Footer
