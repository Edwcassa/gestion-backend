const express = require("express")
const controller = require("../controllers/docente")

const router = express.Router();


router.get('/docentes', controller.getAllDocentes);
router.get("/docentes/:id", controller.getDocenteById);
router.post('/docentes', controller.createDocente);
router.put('/docentes/:id', controller.updateDocente);
router.delete('/docentes/:id', controller.deleteDocente);

module.exports = router;