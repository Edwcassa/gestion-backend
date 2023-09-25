const { model, Schema } = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Curso:
 *       type: object
 *       required:
 *         - codigo
 *         - nombre
 *         - tipo
 *         - categoria
 *         - grupo
 *         - creditos
 *       properties:
 *         codigo:
 *           type: string
 *         nombre:
 *           type: string
 *         tipo:
 *           type: string
 *         categoria:
 *           type: string
 *         grupo:
 *           type: string
 *         creditos:
 *           type: number
 *         horario:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               dia:
 *                 type: string
 *               horaInicio:
 *                 type: string
 *               horaFin:
 *                 type: string
 *         asignado:
 *           type: boolean
 *       example:
 *         codigo: "CSCI101"
 *         nombre: "Introducción a la Programación"
 *         tipo: "Electiva"
 *         categoria: "Informática"
 *         grupo: "A"
 *         creditos: 3
 *         horario:
 *           - dia: "Lunes"
 *             horaInicio: "09:00 AM"
 *             horaFin: "11:00 AM"
 *           - dia: "Miércoles"
 *             horaInicio: "09:00 AM"
 *             horaFin: "11:00 AM"
 *         asignado: false
 */


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