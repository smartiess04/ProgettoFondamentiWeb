const mongoose = require("mongoose")

const modelReadingProgress = new mongoose.Schema({
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
        enum: ['da_leggere' , 'in_lettura', 'completato']
    },
    pagesRead:{
        type: Number
    },
    updatedAt: {
        type: Date
    }
})