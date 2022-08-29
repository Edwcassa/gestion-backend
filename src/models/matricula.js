const { Schema, model } = require('mongoose')

const matriculaSchema = Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'docente',
    required: true
  },

  curso: {
    type: Schema.Types.ObjectId,
    ref: 'curso',
    required: true
  },

  alumnos: [{
    nombre: String,
    asistencias: [{
      date: Date,
      flag: Boolean
    }],
  }],

  contenidos: [{
    titulo: String,
    capitulos: [{
      titulo: String,
      temas: String
    }]
  }],

  avanzados: [{
    unidad: String,
    capitulo: String,
    tema: String,
    descripcion: String,
    fecha: Date,
  }]

}, { collection: 'matriculas' })




// MatriculaSchema.method('toJSON',function () {
//     const {__v,...object}=this.toObject()
//     return object
// })



module.exports = model('matricula', matriculaSchema)