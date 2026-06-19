const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');

const express = require("express");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const cookieParser= require ("cookie-parser");
const authRoutes= require("./routes/authRoutes");
const bookRoutes= require("./routes/bookRoutes");
const userRoutes= require("./routes/userRoutes");
const reviewRoutes= require("./routes/reviewRoutes");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json()); //intercetta e tarduce oggetto greezzo per metterlo in req.body
app.use(cookieParser()); //JWT va nel cookie


//gestione rotte
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/books',bookRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/books',reviewRoutes);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

const expressServer = app.listen(port, () => {
  console.log(`App in ascolto su porta ${port}`);
});

// Inizializziamo Socket.io usando direttamente il server avviato da Express
const io = new Server(expressServer, {
  cors: {
    origin: "*", // Permette richieste da React
    methods: ["GET", "POST", "DELETE"]
  }
});

// Salviamo l'istanza di io per usarla nei controller
app.set("io", io);

io.on("connection", (socket) => {
  console.log("Un utente si è connesso a Socket.io");
  socket.on("disconnect", () => {
    console.log("Utente disconnesso");
  });
});
