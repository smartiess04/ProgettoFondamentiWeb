const mongoose= require('mongoose')

const reviewModel= new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    voto: {
        type: Number,
        required: true,
        min: 1,
        max:5
    },
    commento: {
        type: String,
        required: true
    },    
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports= mongoose.model('Review',reviewModel)