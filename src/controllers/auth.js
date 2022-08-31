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