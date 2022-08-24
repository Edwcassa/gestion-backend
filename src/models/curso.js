const { model, Schema } = require('mongoose');

const cursoSchema = new Schema({
  codigo: {
    type: String,
    required: true,
    unique: true
  },

  nombre: {
    type: String,
    required: true
  },

  tipo: {
    type: String,
    required: true
  },

  categoria: {
    type: String,
    required: true
  },

  grupo: {
    type: String,
    required: true
  },

  creditos: {
    type: Number,
    required: true
  },

  horario: [
    { dia: String, horaInicio: String, horaFin: String }
  ],

  asignado: {
    type: Boolean,
    default: false
  }
});

module.exports = model('curso', cursoSchema)