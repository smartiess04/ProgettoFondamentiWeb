const mongoose = require ('mongoose');

const chatSchema = new mongoose.Schema({
    bookId: {
        type: moongose.Schema.types.ObjectId,
        ref: 'Book',
        required: true
    },

    partecipants: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],

    createdAt: {
        type: Data,
        default: Date.now
    }
})

module.exports = mongoose.model("Chat", chatSchema)