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
            name: 'Francesa',
            username: 'FraLoca',
            email: 'francesca@example.com',
            password: 'password123',
            avatar: 'https://example.com/francesca.jpg',
            prefererenzeGenere: 'Gialli',
            createdAt: Date.now,
            bio: 'Amo leggere e condividere le mie opinioni sui libri!',
        });
        
        console.log('Utente creato:', Francesca.username);


        const books= [
          {
                titolo: "Il Signore degli Anelli",
                autore: "J.R.R. Tolkien",
                genere: "Fantasy",
                pagineTotali: 1200,
                editore: "Bompiani",
                isbn: "978-8845292613",
                descrizione: "Un epico viaggio per distruggere l'Anello del Potere.",
                linkAcquisto: 'https://www.amazon.it/dp/883010471X?ref=cm_sw_r_ffobk_cp_ud_dp_EA9BB9YKESK6SC30HDG6&ref_=cm_sw_r_ffobk_cp_ud_dp_EA9BB9YKESK6SC30HDG6&social_share=cm_sw_r_ffobk_cp_ud_dp_EA9BB9YKESK6SC30HDG6&bestFormat=true' ,
                copertinaURL: "https://via.placeholder.com/150", 
            },
            {
                titolo: "1984",
                autore: "George Orwell",
                genere: "Sci-fi",
                pagineTotali: 328,
                editore: "Mondadori",
                isbn: "978-8804681690",
                descrizione: "Una distopia sul totalitarismo e il controllo della mente.",
                linkAcquisto: 'https://www.amazon.it/dp/8807903814?ref=cm_sw_r_ffobk_cp_ud_dp_75CR1S7FTQZGB38W18XW&ref_=cm_sw_r_ffobk_cp_ud_dp_75CR1S7FTQZGB38W18XW&social_share=cm_sw_r_ffobk_cp_ud_dp_75CR1S7FTQZGB38W18XW&bestFormat=true' ,
                copertinaURL: "https://via.placeholder.com/150",
            },
            {
                titolo: "Orgoglio e Pregiudizio",
                autore: "Jane Austen",
                genere: "Classici",
                pagineTotali: 432,
                editore: "Einaudi",
                isbn: "978-8806213455",
                descrizione: "La complessa storia d'amore tra Elizabeth Bennet e Mr. Darcy.",
                linkAcquisto: 'https://amzn.eu/d/0eJkZdtN',
                copertinaURL: "https://via.placeholder.com/150",
            }
          ]
        const createdBooks= await Book.insertMany(books);
        console.log(`Created at ${createdBooks.length} books`);

        const reviews = [
            {
                userId: francesca._id,
                bookId: createdBooks[0]._id, // Il Signore degli Anelli
                voto: 5,
                commento: "Il miglior libro fantasy mai scritto. Capolavoro assoluto!",
                createdAt: Date.now
            }, 
            {
                userId: francesca._id,
                bookId: createdBooks[1]._id, // 1984
                voto: 4,
                commento: "Inquietante e spaventosamente attuale.",
                createdAt: Date.now
            }, 
            {
                userId: francesca._id,
                bookId: createdBooks[2]._id, // Orgoglio e Pregiudizio
                voto: 5,
                commento: "Un classico indimenticabile, l'ho riletto tre volte.",
                createdAt: Date.now
            }
        ];

        const createdReviews= await Review.insertMany(reviews);
        console.log(`Created ${reviews.length} reviews`);

      console.log(`Databes Completed`);
      await mongoose.connection.close();
       } catch (error) {
            console.error('Errore durante il seed:', error);
            process.exit(1);
       } 
}
seed();

