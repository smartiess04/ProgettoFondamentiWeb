import  '../style/RefreshPage.css'
import {Link, useNavigate} from "react-router-dom";
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
                       <Link  className= "btn-refresh link-refresh" to="/LoginPage">Login</Link>
                    </div>
                </nav>
            </header>

            <main className='titoli-refresh'>
                <h1>Le storie uniscono,  Liber le connette</h1>
                <h3>Niente più letture solitarie. Scopri un sito unico in cui tracciare le tue tappe, 
                    scambiare opinioni autentiche e vivere ogni libro insieme ad una community che ama leggere quanto te!</h3>
            </main>

            <h3>
                 <a className = 'refresh-call2action' href= ""> Pronto a voltare pagina? Registrati ora. </a>
            </h3>
            
            
            <footer className='footer-refresh'>
                <p>Corso di Fondamenti Web 25/26 Martina Cataleta, Francesca Teresa Rosa Augello, Giuseppe Galetta</p>
            </footer>

        </div>
        
         </>

    )

}