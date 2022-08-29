const express = require("express")
const controller = require("../controllers/matricula")

const router = express.Router();


router.get('/matriculas', controller.getAllMatriculas);
router.get("/matriculas/:id", controller.getMatriculaById);
router.post('/matriculas', controller.createMatricula);
router.put('/matriculas/:id', controller.updateMatricula);
router.delete('/matriculas/:id', controller.deleteMatricula);

module.exports = router;