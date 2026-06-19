import React from "react";
import { useEffect , useState } from "react";
import { getReviews } from "../services/api";
import "../style/BookPage.css";


export default function ReviewVisualizer({book}){

    const [reviews , setReviews] = useState([]);
    const [inCaricamento, setInCaricamento] = useState(true);

    useEffect(() => {
         getReviews(book._id)
          .then((data) =>{
            setReviews(data);
            setInCaricamento(false);
          })
          .catch((error) => {
                console.error("Errore:", error);
                setInCaricamento(false); // Va spento solo qui o nel .then!
            });
      }, [book._id]);
 

    return(
    <>
        {/* ABBIAMO RIPRISTINATO IL NOME DELLA CLASSE ORIGINALE */}
        <div className="review-visualizer">
            <h2 className="titolo-recensioni">Recensioni della community</h2>
            
            <div className="review-list-container">
                {inCaricamento ? (
                    <p style={{ color: "white" }}>Caricamento recensioni...</p>
                ) : reviews.length === 0 ? (
                    <p style={{ color: "white", fontStyle: "italic" }}>Ancora nessuna recensione. Scrivi la prima!</p>
                ) : (
                    reviews.map((recensione) =>(
                        <div className="singola-recensione" key={recensione._id}>
                            <span className="info-recensione"><b>Username:</b> {recensione.author?.username || "Utente Sconosciuto"}</span>
                            <span className="info-recensione"><b>Valutazione:</b> {recensione.voto} / 5 ⭐</span>
                            <span className="info-recensione"><b>Commento:</b> {recensione.commento}</span>
                        </div>
                    ))  
                )}
            </div>
        </div>
    </>
)
}