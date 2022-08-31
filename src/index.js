const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config()

const { dbConnection } = require("./database/config");
const docenteRoute = require("./routes/docente");
const cursoRoute = require("./routes/curso");
const matriculaRoute = require("./routes/matricula");
const loginRoute = require("./routes/auth");

// settings
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api", docenteRoute);
app.use("/api", cursoRoute);
app.use("/api", matriculaRoute);
app.use("/api", loginRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
// mongoose
//   .connect("mongodb://mongo:QRzGaeNgatCz1L7eOpsV@containers-us-west-24.railway.app:5545")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error(error));
dbConnection();

// server listening
app.listen(port, () => console.log("Server listening to", port));