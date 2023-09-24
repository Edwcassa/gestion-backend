const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerConfig')
const cors = require('cors');
require('dotenv').config()

const docenteRoute = require("./routes/docente");
const cursoRoute = require("./routes/curso");
const matriculaRoute = require("./routes/matricula");
const loginRoute = require("./routes/auth");

// settings
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", docenteRoute);
app.use("/api", cursoRoute);
app.use("/api", matriculaRoute);
app.use("/api", loginRoute);

// routes
app.get("/", (req, res) => {
   res.send("Welcome to my API");
 });

 module.exports = app