const cursoSchema = require('../models/curso')

const getAllCourses = async (req, res) => {
  try {
    const allCursos = await cursoSchema.find()
    res.json({
      ok: true,
      cursos: allCursos
    })
  }
  catch (error) {
    res.json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const getCourseById = async (req, res) => {
  const uid = req.params.id
  try {
    const curso = await cursoSchema.findById(uid)
    if (!curso) return res.json({ ok: false, curso: null })
    res.json({
      ok: true,
      curso
    })
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const createCourse = async (req, res) => {
  try {
    const newCurso = new cursoSchema(req.body)
    await newCurso.save()
    res.json({
      ok: true,
      curso: newCurso
    })
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const updateCourse = async (req, res) => {
  const uid = req.params.id
  const upCurso = req.body
  try {
    const result = await cursoSchema.findByIdAndUpdate(uid, { $set: upCurso })
    res.json({
      ok: true,
      curso: upCurso
    })
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error server'
    })
  }
}

const deleteCourse = async (req, res) => {
  const uid = req.params.id
  try {
    const delCurso = await cursoSchema.findByIdAndDelete(uid)
    if (!delCurso) return res.json({ ok: false, msg: 'no existe el curso' })
    res.json({
      ok: true,
      msg: 'Curso eliminado'
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
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
}