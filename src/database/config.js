const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('conectado a base de datos')
  }).catch(err => {
     console.error(err)
     console.log('error al conectar con la base de datos')
  })
}
module.exports = {
  dbConnection
}