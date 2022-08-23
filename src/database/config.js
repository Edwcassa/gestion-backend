const mongoose = require('mongoose')

const dbConnection = async () => {
  await mongoose.connect("mongodb://mongo:uVMpZRCfY6UtXELs3kbg@containers-us-west-27.railway.app:5487", {
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