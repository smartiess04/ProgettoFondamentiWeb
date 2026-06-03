const mongoose = require ('mongoose');

const chatSchema = new mongoose.Schema({
    bookId: {
        type: moongose.Schema.types.ObjectId,
        ref: 'Book',
        required: true
    },

    partecipants: [{
        
    }]

})