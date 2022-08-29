const mongoose = require('mongoose')

const dbConnection = async () => {
  await mongoose.connect("mongodb://mongo:cbTeOCVXejkXCnJJQfnJ@containers-us-west-85.railway.app:7994", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('conectado a base de datos')
  }).catch(err => {
    console.error(err)
  })
}
module.exports = {
  dbConnection
}