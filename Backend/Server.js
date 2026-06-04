const express = require("express");
const app = express();
const port = 3000;

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const cookieParser= require (`cookie-parser`);

app.use(express.json()); //intercetta e tarduce oggetto greezzo per metterlo in req.body
app.use(cookiePareser()); //JWT va nel cookie

connectDB();
//monto le rotte
const authRoutes= require(`./routes/authRoutes`);
app.use(`/api/v1/auth`,authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`App in ascolto su porta ${port}`);
});

