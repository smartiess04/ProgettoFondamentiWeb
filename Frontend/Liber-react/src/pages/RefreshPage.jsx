import React from 'react'
import {Link} from 'react-router-dom'
import  '../style/RefreshPage.css'
import Logo from "../components/Logo"


export default function RefreshPage(){
    return(
        <>
        <div className="sfondo-container">
        
            <header> 
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
            </header>

            <main className='titoli-refresh'>
                <h2>Le storie uniscono,Liber le connette</h2>
                <h3>Niente più letture solitarie. Scopri un sito unico in cui tracciare le tue tappe, 
                    scambiare opinioni autentiche e vivere ogni libro insieme ad una community che ama leggere quanto te...</h3>
            </main>

            <footer className='footer-refresh'>
                <p>Corso di Fondamenti Web 25/26 Martina Cataleta, Francesca Teresa Rosa Augello, Giuseppe Galetta</p>
            </footer>
            
        </div>
        
        
        
         </>

    )

}