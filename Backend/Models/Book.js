const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    titolo: {
        type: String,
        required: true
    } ,
    autore: {
        type: String, 
        required: true
    },
    genere: {
        type: String,
        required: true
    },
    pagineTotali: {
        type: Number,
        required: true
    },
    editore: {
        type: String
    },
    isbn : {
        type: String
    },
    copertinaURL: {
        type: String
    },
    descrizione: {
        type: String
    },
    linkAcquisto: {
        type: String
    }

})

module.exports = mongoose.model("Book" , bookSchema)