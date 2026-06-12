import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CardBook from "../components/CardBook";
import "../style/HomePage.css";

import { getBooks } from "../services/api";

export default function HomePage() {
 
  const [libri, setLibri] = useState([]);
  const [inCaricamento, setInCaricamento] = useState(true);
  const [testoRicerca, setTestoRicerca] = useState("");

  useEffect(() => {
     getBooks()
      .then((data) =>{setLibri(data);
        setInCaricamento(false)
      })
      .catch((error) => console.error("Errore:", error));
  }, []);

  const libriFiltrati = libri.filter((libro) => 
    libro.titolo.toLowerCase().includes(testoRicerca.toLowerCase()) ||
    libro.autore.toLowerCase().includes(testoRicerca.toLowerCase())
  );
    

  return (
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
  );
}