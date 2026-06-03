const mongoose = require("mongoose")

const readingProgressSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bookID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book', 
        required: true
    },
    status: {
        type: String,
        enum: ['da_leggere' , 'in_lettura', 'completato'],
        default: 'da_leggere'
    },
    pagesRead:{
        type: Number,
        default: 0
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Reading Progress", readingProgressSchema)