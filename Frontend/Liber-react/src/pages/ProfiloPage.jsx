import Navbar from "../components/Navbar"
import { useState } from "react";
import "../style/ProfiloPage.css"


export default function ProfiloPage(){
    const[open,setIsOpen]=useState(false);

   return(
            <>
           <div className="sfondo-home-page">
            <Navbar />
             <div className="profile-box">
                <h2 className="title-profile-page">MyProfile</h2>
                    <div className="icona-profilo" onClick={(e)=>{
                        e.preventDefault();
                        setIsOpen(!open)}}>
                   </div>
                    <div className="elements-profilebox" >
                                <span className="info-nome-profile">nome:</span>
                                <span className="info-user-profile">username:</span>
                                <span className="info-generi-profile">generi preferiti:</span>
                                <span className="info-bio-profile">bio:</span>
                    </div>

            {open && (
                <div className="chose-profile-icon">





                </div>



            )}       



             </div>
            




           </div>



            </>

    )
}
