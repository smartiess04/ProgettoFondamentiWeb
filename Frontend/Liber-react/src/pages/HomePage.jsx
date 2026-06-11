import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CardBook from "../components/CardBook";
import "../style/HomePage.css";

import { getBooks } from "../services/api";

export default function HomePage() {
 
  const [libri, setLibri] = useState([]);
  const [inCaricamento, setInCaricamento] = useState(true);

  useEffect(() => {
     getBooks()
      .then((data) =>{setLibri(data);
        setInCaricamento(false)
      })
      .catch((error) => console.error("Errore:", error));
  }, []);

  return (
    <div className="sfondo-home-page">
      <Navbar />
      <main className="home-page-content">
        {inCaricamento ? (
          <h2 style={{ color: "white", textAlign: "center" }}>Caricamento...</h2>
        ) : (
          <div className="books-containers">
            {libri.map((libro) => (
              <CardBook
                key={libro._id}
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