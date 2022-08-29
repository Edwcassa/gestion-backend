const matriculaSchema = require('../models/matricula')
const cursoSchema = require('../models/curso')
const docenteSchema = require('../models/docente')

const getAllMatriculas = async (req, res) => {
  try {
    const allMatriculas = await matriculaSchema.find()
      .populate('usuario', 'nombre apellido')
      .populate('curso')

    res.json({
      ok: true,
      matriculas: allMatriculas
    })
  }
  catch (error) {
    res.json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const getMatriculaById = async (req, res) => {
  const uid = req.params.id
  try {
    const matricula = await matriculaSchema.findById(uid)
    if (!matricula) return res.json({ ok: false, matricula: null })
    res.json({
      ok: true,
      matricula: matricula
    })
  }
  catch (error) {
    res.json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const createMatricula = async (req, res) => {
  try {
    const curso = await cursoSchema.findById(req.body.curso)
    if (!curso) return res.json({ ok: false, msg: 'No existe curso' })
    const docente = await docenteSchema.findById(req.body.usuario)
    if (!docente) return res.json({ ok: false, msg: 'No existe el docente' })

    const newMatr = new matriculaSchema(req.body)
    await newMatr.save()
    res.json({
      ok: true,
      matricula: newMatr
    })
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const updateMatricula = async (req, res) => {
  const uid = req.params.id

  const curso = await cursoSchema.findById(req.body.curso)
  if (!curso) return res.json({ ok: false, msg: 'No existe curso' })
  const docente = await docenteSchema.findById(req.body.usuario)
  if (!docente) return res.json({ ok: false, msg: 'No existe el docente' })

  const upMatr = req.body
  try {
    await matriculaSchema.findByIdAndUpdate(uid, { $set: upMatr })
    res.json({
      ok: true,
      matricula: upMatr
    })
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const deleteMatricula = async (req, res) => {
  const uid = req.params.id
  try {
    const delMatr = await matriculaSchema.findByIdAndDelete(uid)
    if (!delMatr) return res.json({ ok: false, msg: 'no existe la matricula' })
    res.json({
      ok: true,
      msg: 'Matricula eliminada'
    })
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error server'
    })
  }
}


module.exports = {
  getAllMatriculas,
  getMatriculaById,
  createMatricula,
  updateMatricula,
  deleteMatricula
}