const mongoose = require("mongoose")

const readingProgressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bookId: {
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
    }
},{
    timestamps: true
})

module.exports = mongoose.model("ReadingProgress", readingProgressSchema)