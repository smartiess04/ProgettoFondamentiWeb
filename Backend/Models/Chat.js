const mongoose = require ('mongoose');

const chatSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },

    participants: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]
},{
    timestamps: true
})

module.exports = mongoose.model("Chat", chatSchema)