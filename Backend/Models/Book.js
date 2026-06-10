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
    pagine: {
        type: Number,
        required: true
    },
    editore: {
        type: String
    },

    anno: {
        type: Number
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
},{
    timestamps: true
})

module.exports = mongoose.model("Book" , bookSchema)