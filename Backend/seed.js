//importo la libreria Mongoose
const mongoose = require('mongoose');

//importo la libreria dotenv per gestire le variabili d'ambiente
require('dotenv').config();

//importo i modelli per interagire con le collezioni del database
const User = require('./models/User');
const Book = require('./models/Book');
const Chat = require('./models/Chat');
const Message = require('./models/Message');
const Review = require('./models/Review');
const ReadingProgress = require('./models/ReadingProgress');

async function seed() {
    try {
        //connessione al database MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connesso');


        await User.deleteMany({});
        await Book.deleteMany({});
        await Chat.deleteMany({});
        await Message.deleteMany({});
        await Review.deleteMany({});
        await ReadingProgress.deleteMany({});
        console.log('Collezioni svuotate');

        const Francesca = await User.create({
            username: 'Francesca',
            email: 'francesca@example.com',
            password: 'password123',
            profilePicture: 'https://example.com/francesca.jpg',
            bio: 'Amo leggere e condividere le mie opinioni sui libri!',
        });

        console.log('Utente creato:', Francesca.username);

        //da qui in giu non so cosa sia
        } catch (error) {
    // Questo cattura ed elenca gli eventuali errori
    console.error('Errore durante il seed:', error);
  } finally {
    // Questo chiude la connessione e spegne lo script quando ha finito
    mongoose.connection.close(); 
  }
}

// Avviamo la funzione!
seed();

