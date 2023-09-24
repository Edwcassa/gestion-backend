/**
 * @swagger
 * components:
 *   schemas:
 *     Docente:
 *       type: object
 *       required:
 *         - codDocente
 *         - email
 *         - contrasenia
 *         - nombre
 *         - apellido
 *         - sexo
 *         - categoria
 *         - esAdmin
 *       properties:
 *         codDocente:
 *           type: string
 *         email:
 *           type: string
 *         contrasenia:
 *           type: string
 *         nombre:
 *           type: string
 *         apellido:
 *           type: string
 *         sexo:
 *           type: string
 *         categoria:
 *           type: string
 *         esAdmin:
 *           type: boolean
 *         telefono:
 *           type: string
 *         img:
 *           type: string
 */


const { Schema, model } = require('mongoose');

var docenteSchema = Schema({
  codDocente: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  contrasenia: {
    type: String,
    required: true,
  },

  nombre: {
    type: String,
    required: true,
  },

  apellido: {
    type: String,
    required: true,
  },

  sexo: {
    type: String,
    required: true,
  },

  categoria: {
    type: String,
    required: true,
  },

  esAdmin: {
    type: Boolean,
    require: true,
    default: false
  },

  telefono: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: false,
  },
});

module.exports = model('docente', docenteSchema);