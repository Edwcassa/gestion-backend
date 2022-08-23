const docenteSchema = require('../models/docente')

const getAllDocentes = async (req, res) => {
  try {
    const allDocentes = await docenteSchema.find()
    res.json({
      ok: true,
      docentes: allDocentes
    })
  }
  catch (error) {
    res.json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const getDocenteById = async (req, res) => {
  const uid = req.params.id
  try {
    const docente = await docenteSchema.findById(uid)
    if (!docente) return res.json({ ok: false, docente: null })
    res.json({
      ok: true,
      docente
    })
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const createDocente = async (req, res) => {
  try {
    const newDoc = new docenteSchema(req.body)
    await newDoc.save()
    res.json({
      ok: true,
      docente: newDoc
    })
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const updateDocente = async (req, res) => {
  const uid = req.params.id
  const upDoc = req.body
  try {
    const result = await docenteSchema.findByIdAndUpdate(uid, { $set: upDoc })
    res.json({
      ok: true,
      docente: upDoc
    })
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const deleteDocente = async (req, res) => {
  const uid = req.params.id
  try {
    const delDoc = await docenteSchema.findByIdAndDelete(uid)
    if (!delDoc) return res.json({ ok: false, msg: 'no existe el docente' })
    res.json({
      ok: true,
      msg: 'Docente eliminado'
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
  getAllDocentes,
  getDocenteById,
  createDocente,
  updateDocente,
  deleteDocente
}