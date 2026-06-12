import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CardBook from "../components/CardBook";
import "../style/HomePage.css"; 

import { getFavorites } from "../services/api";


export default function BibliotecaPage(){
   const [libriPreferiti, setLibriPreferiti] = useState([]);



   return(
      <>
       <div className="sfondo-home-page">
            <Navbar />
              <div className="search-bar">
                <input type="text" placeholder="cerca libro o autore..." value={testoRicerca} onChange={(e)=>{setTestoRicerca(e.target.value) }}></input>
              </div>
            <main className="home-page-content">
              {inCaricamento ? (
                <h2 style={{ color: "white", textAlign: "center" }}>Caricamento...</h2>
              ) : (
                <div className="books-containers">
                  {libriFiltrati.map((libro) => (
                    <CardBook
                      key={libro._id}
                      id={libro._id}
                      copertinaURL={libro.copertinaURL}
                      titolo={libro.titolo}
                      author={libro.autore}
                      genere={libro.genere}
                      pagine={libro.pagine}
                      anno={libro.anno}
                    />
                  ))}
                </div>
              )}
            </main>
          </div>

   
      </>
    
   )
}