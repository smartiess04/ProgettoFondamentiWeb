import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createReviews } from "../services/api"; // Rimosso deleteReviews che qui non serve

export default function ReviewPanel({ book }) {

    // 1. Aggiunto "const"
    const [voto, setVoto] = useState(1);
    const [commento, setCommento] = useState("");

    const handleInvioRecensione = async (e) => {
        e.preventDefault();

        try {
            // 2. Aggiunto l'ID del libro e await. 
            // NOTA: Controlla come hai definito createReviews nel tuo file api.js!
            // Di solito si passa l'ID e poi un oggetto con i dati.
            const currentId =  book._id;
            await createReviews(currentId, { voto, commento });
            
            // Opzionale ma consigliato: mostra un messaggio di successo e svuota il form
            alert("Recensione inviata con successo!");
            setCommento("");
            setVoto(1);
            
        } catch (error) {
            console.error("Errore durante la creazione della recensione:", error);
            alert("Si è verificato un errore durante l'invio della recensione.");
        }
    }

    return (
        <>
            <div className="review-panel">
                {/* 3. Spostato l'evento di invio sul <form> */}
                <form className="box-recensione" onSubmit={handleInvioRecensione}>

                    <h2 className="titolo-recensione">Scrivi una recensione🖋️</h2>

                    <div className="num-valutazione"> 
                        <span>Seleziona una valutazione da 1 a 5 ⭐  </span>
                        <select 
                            value={voto} 
                            onChange={(e) => setVoto(Number(e.target.value))}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    
                    <textarea 
                        className="testo-recensione" 
                        placeholder="Cosa ne pensi di questo libro? Scrivi qui la tua recensione..."
                        value={commento}
                        onChange={(e) => setCommento(e.target.value)}
                    ></textarea>

                    {/* Il bottone ora ha solo type="submit", farà scattare l'onSubmit del form */}
                    <button type="submit" className="btn-invia-recensione">
                        Invia la recensione
                    </button>
                </form>
            </div>
        </>
    )
}