const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");
const cookieParser= require ("cookie-parser");
const authRoutes= require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json()); //intercetta e tarduce oggetto greezzo per metterlo in req.body
app.use(cookieParser()); //JWT va nel cookie

//monto le rotte
app.use(`/api/v1/auth`,authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App in ascolto su porta ${port}`);
});

