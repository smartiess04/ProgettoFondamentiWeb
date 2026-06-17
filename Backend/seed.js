//importo la libreria Mongoose
const mongoose = require('mongoose');

const fs= require('fs');
const path= require('path');

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

        const francesca = await User.create({
            name: 'Francesa',
            username: 'FraLoca',
            email: 'francesca@example.com',
            password: 'password123',
            avatar: '🐿️',
            prefererenzeGenere: 'Gialli',
            bio: 'Amo leggere e condividere le mie opinioni sui libri!',
        });
        
        console.log('Utente creato:', francesca.username);

//LETTURA DAL FILE JSON

        // Leggiamo il file JSON in modo sincrono e lo convertiamo in un array JS
        const pathFileLibri = path.join(__dirname, 'libri.json');
        const libriJson = JSON.parse(fs.readFileSync(pathFileLibri, 'utf-8'));
        
        // Inseriamo tutti i libri estratti dal JSON nel database
        const createdBooks = await Book.insertMany(libriJson);
        console.log(`Creati ${createdBooks.length} libri con successo dal file JSON`);
        

        const reviews = [
            {
                userId: francesca._id,
                bookId: createdBooks[0]._id, // Il Signore degli Anelli
                voto: 5,
                commento: "Il miglior libro fantasy mai scritto. Capolavoro assoluto!",
            }, 
            {
                userId: francesca._id,
                bookId: createdBooks[1]._id, // 1984
                voto: 4,
                commento: "Inquietante e spaventosamente attuale.",
            }, 
            {
                userId: francesca._id,
                bookId: createdBooks[2]._id, // Orgoglio e Pregiudizio
                voto: 5,
                commento: "Un classico indimenticabile, l'ho riletto tre volte.",
            }
        ];

        const createdReviews= await Review.insertMany(reviews);
        console.log(`Created ${reviews.length} reviews`);

      console.log(`Database Completed`);
      await mongoose.connection.close();
       } catch (error) {
            console.error('Errore durante il seed:', error);
            process.exit(1);
       } 
}
seed();

