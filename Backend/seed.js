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
const ReadingProcess = require('./models/ReadingProcess');



