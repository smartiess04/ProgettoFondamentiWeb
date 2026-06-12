const mongoose= require('mongoose');
const Book= require('../models/Book');
const User = require('../models/User');

const getBooks= async (req,res)=>{
    try{
        const books= await Book.find();
        res.status(200).json(books);
    } catch(error){
        console.error(error);
    }
}

const getFavorites= async (req,res)=>{
    try{
        const userId= req.user._id;
        //uso populate perchè altrimenti non si riuscirebbe a recuperare la copertina (avremmo solo i gli Id dei libri)
        const user= await User.findById(userId).populate('preferiti');
         if (!user) {
            return res.status(404).json({ message: "Utente non trovato" });
        }
        const favorites= user.preferiti;
        res.status(200).json(favorites);
    }catch(error){
        res.status(500).json({ message: "Errore nel recupero dei preferiti"}) 
    }
}

const toggleFavorite = async (req, res) => {
    try {
        // Il middleware ci passerà l'ID dell'utente loggato dentro req.user
        const userId = req.user._id;
        // leggiamo il libro scelto (usiamo params perchè l'oggetto si prende dall'URL, è piu specifico invece del body)
        const bookId = req.params.id;
        
        //va a prendere tutte le inf0 dell'utente richiesto 
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "Utente non trovato" });
        }

        // Controlliamo se l'ID del libro è già dentro l'array "preferiti"
        const alreadyFav = user.preferiti.includes(bookId);

        if (alreadyFav) {
            // se il libro è gia preferito, lo tolgo dalla lista 
            // filter() crea una nuova lista tenendo solo i libri DIVERSI da quello cliccato (uso il metodo filter per rimuovere elemento da array)
            user.preferiti = user.preferiti.filter((id) => id.toString() !== bookId.toString());
        } else {
            // il libro non c'è: Lo aggiungiamo alla lista
            user.preferiti.push(bookId);
        }

        // salviamo la scheda del database
        await user.save();

        // avvisiamo che è stato fatto
        return res.status(200).json({ 
            message: alreadyFav ? "Libro rimosso" : "Libro aggiunto",
            preferiti: user.preferiti // Mandiamo indietro la lista aggiornata
        });

    } catch (error) {
        console.error("Errore nel controller:", error);
        return res.status(500).json({ message: "Errore interno del server" });
    }
};


module.exports={
    getBooks,
    toggleFavorite,
    getFavorites
}