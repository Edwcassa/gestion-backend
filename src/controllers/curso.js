const cursoSchema = require('../models/curso')

/**
 * @swagger
 * components:
 *   schemas:
 *     CursoListResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         cursos:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Curso'
 */
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


/**
 * @swagger
 * components:
 *   schemas:
 *     CursoResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         curso:
 *           $ref: '#/components/schemas/Curso'
 *             
 */
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


/**
 * @swagger
 * components:
 *   schemas:
 *     CursoResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         curso:
 *           $ref: '#/components/schemas/Curso'
 *             
 */
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


/**
 * @swagger
 * components:
 *   schemas:
 *     CursoResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         curso:
 *           $ref: '#/components/schemas/Curso'
 *             
 */
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


/**
 * @swagger
 * components:
 *   schemas:
 *     CursoDeleteResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         msg:
 *           type: string
 *             
 */
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