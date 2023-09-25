const express = require("express")
const controller = require("../controllers/curso")

const router = express.Router();


router.get('/cursos', controller.getAllCourses);
/**
 * @swagger
 * /api/cursos:
 *   get:
 *     summary: Listar todos los cursos
 *     description: Listar todos los cursos
 *     tags:
 *       - Curso
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoListResponse'
 *       '500':
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */


router.get("/cursos/:id", controller.getCourseById);
/**
 * @swagger
 * /api/cursos/{id}:
 *    get:
 *      summary: Obtener un curso por ID
 *      description: Obtener un curso por ID
 *      tags:
 *        - Curso
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del docente
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CursoResponse'
 *        '500':
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ErrorResult'
 */


router.post('/cursos', controller.createCourse);
/**
 * @swagger
 * /api/cursos:
 *   post:
 *     summary: Crear un curso
 *     description: Crear un curso
 *     tags:
 *       - Curso
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:  
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                ok:
 *                  type: boolean
 *                docente:
 *                  $ref: '#/components/schemas/CursoResponse'
 *       '500':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */


router.put('/cursos/:id', controller.updateCourse);
/**
 * @swagger
 * /api/cursos/{id}:
 *   put:
 *     summary: Actualizar un curso
 *     description: Actualizar un curso
 *     tags:
 *       - Curso
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del docente
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:  
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                ok:
 *                  type: boolean
 *                docente:
 *                  $ref: '#/components/schemas/CursoResponse'
 *       '500':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */


router.delete('/cursos/:id', controller.deleteCourse);
/**
 * @swagger
 * /api/cursos/{id}:
 *   delete:
 *     summary: Eliminar un curso
 *     description: Eliminar un curso
 *     tags:
 *       - Curso
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del docente
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CursoDeleteResponse'
 *       '500':
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */ 


module.exports = router;