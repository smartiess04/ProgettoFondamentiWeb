import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import  '../style/RefreshPage.css'
import Logo from "../components/Logo"


export default function RefreshPage(){
    return(
        <>
        <div className= "sfondo-container"> 
            <nav className="nav-refresh">
                <div className="nav-sinistra">
                    <Logo/>
                    <span className="titolo-app">Liber</span>
                </div>
                <div className="nav-destra">
                    <button className= "btn-refresh">Login</button>
                    <button className="btn-refresh">Registrati</button>
                </div>
            </nav>
        </div>
        
        
        
         </>

    )

}