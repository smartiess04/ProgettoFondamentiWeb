const mongoose= require('mongoose');
const Book= require('../models/Book');

const getBooks= async (req,res)=>{
    try{
        const books= await Book.find();
        res.status(200).json(books);
    } catch(error){
        console.error(error);
    }
}

const toggleFavorite = async (req, res) => {
    try {
        // Il middleware ci passerà l'ID dell'utente loggato dentro req.user
        const userId = req.user._id;
        // leggiamo il libro scelto
        const bookId = req.params.id;
        
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "Utente non trovato" });
        }

        // 4. CONTROLLIAMO LA TUA LISTA DEI PREFERITI
        // Controlliamo se l'ID del libro è già dentro l'array "preferiti"
        const giaPreferito = user.preferiti.includes(bookId);

        if (giaPreferito) {
            // IL LIBRO C'È GIÀ: Lo togliamo dalla lista
            // filter() crea una nuova lista tenendo solo i libri DIVERSI da quello cliccato
            user.preferiti = user.preferiti.filter((id) => id.toString() !== bookId.toString());
        } else {
            // IL LIBRO NON C'È: Lo aggiungiamo alla lista
            user.preferiti.push(bookId);
        }

        // 5. SALVIAMO LA SCHEDA NEL DATABASE
        await user.save();

        // 6. AVVISIAMO CHE È TUTTO FATTO
        return res.status(200).json({ 
            message: giaPreferito ? "Libro rimosso" : "Libro aggiunto",
            preferiti: user.preferiti // Mandiamo indietro la lista aggiornata
        });

    } catch (error) {
        console.error("Errore nel controller:", error);
        return res.status(500).json({ message: "Errore interno del server" });
    }
};


module.exports={
    getBooks
}