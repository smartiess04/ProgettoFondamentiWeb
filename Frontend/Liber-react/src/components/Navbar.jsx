import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../App.css";

export default function Navbar(){
    return(

        <>

            <div className= "navbar-box">
                <nav>
                    <div className = "nav-sinistra">
                        <Logo/> 
                        <span className = "titolo-app">
                            Liber  
                        </span> 
                    </div>

                    <div className = "nav-destra">
                        <ul>
                            <li ><Link to = "/HomePage">Home</Link></li>
                            <li>Profilo</li>
                            <li>Biblioteca</li>
                            <li><Link to = "/">Logout</Link></li>
                        </ul>
                    </div>    

                </nav>  

            </div>

        </>

    )
}