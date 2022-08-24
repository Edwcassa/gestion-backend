const express = require("express")
const controller = require("../controllers/curso")

const router = express.Router();


router.get('/cursos', controller.getAllCourses);
router.get("/cursos/:id", controller.getCourseById);
router.post('/cursos', controller.createCourse);
router.put('/cursos/:id', controller.updateCourse);
router.delete('/cursos/:id', controller.deleteCourse);

module.exports = router;