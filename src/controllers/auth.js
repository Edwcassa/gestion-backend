const docenteSchema = require('../models/docente')

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const docenteDB = await docenteSchema.findOne({ email })
    if (!docenteDB) {
      return res.status(400).json({
        ok: false,
        msg: "Email no encontrado en la db"
      })
    }
    const passwordDB = password === docenteDB.contrasenia
    // console.log(passwordDB)
    if (!passwordDB) {
      return res.status(400).json({
        ok: false,
        msg: "Contrasenia no valida"
      })
    }

    res.json({
      ok: true,
      msg: 'Exito',
      docenteDB
    })
  }
  catch (error) {
    res.json({
      ok: false,
      msg: 'Error server'
    })
  }
}

module.exports = {
  login
}

/**
 * @swagger
 * /api/login/:
 *   post:
 *     summary: Login de un docente
 *     description: Login de un docente
 *     tags:
 *       - Login
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginModel'
 *     responses:
 *       '200':
 *          description: Operación exitosa
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  email:
 *                    type: string
 *                  password:
 *                    type: string
 *       '500':
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginModel:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 */
