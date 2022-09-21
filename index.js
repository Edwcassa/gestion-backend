const app = require('./src/app')

const { dbConnection } = require("./src/database/config");

const port = process.env.PORT || 5000;

dbConnection();

// server listening
app.listen(port, () => console.log("Server listening to", port));