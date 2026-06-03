const express = require("express");
const app = express();
const port = 3000;

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`App in ascolto su porta ${port}`);
});
connectDB();
