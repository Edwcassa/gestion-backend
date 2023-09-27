const express = require("express")
const controller = require("../controllers/matricula")

const router = express.Router();


router.get('/matriculas', controller.getAllMatriculas);
/**
 * @swagger
 * /api/matriculas:
 *   get:
 *     summary: Listar todos los matriculas
 *     description: Listar todos los matriculas
 *     tags:
 *       - Matricula
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MatriculaListResponse'
 *       '500':
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */


router.get("/matriculas/:id", controller.getMatriculaById);
/**
 * @swagger
 * /api/matriculas/{id}:
 *    get:
 *      summary: Obtener una matricula por ID
 *      description: Obtener una matricula por ID
 *      tags:
 *        - Matricula
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del curso
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/MatriculaResponse'
 *        '500':
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ErrorResult'
 */


router.post('/matriculas', controller.createMatricula);
/**
 * @swagger
 * /api/matriculas:
 *   post:
 *     summary: Crear una matricula
 *     description: Crear una matricula
 *     tags:
 *       - Matricula
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Matricula'
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:  
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MatriculaResponse'
 *       '500':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */


router.put('/matriculas/:id', controller.updateMatricula);
/**
 * @swagger
 * /api/matriculas/{id}:
 *   put:
 *     summary: Actualizar una matricula
 *     description: Actualizar una matricula
 *     tags:
 *       - Matricula
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de matricula
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Matricula'
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:  
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MatriculaResponse'
 *       '500':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */


router.delete('/matriculas/:id', controller.deleteMatricula);
/**
 * @swagger
 * /api/matriculas/{id}:
 *   delete:
 *     summary: Eliminar una matricula
 *     description: Eliminar una matricula
 *     tags:
 *       - Matricula
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del matricula
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/MatriculaDeleteResponse'
 *       '500':
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */ 


module.exports = router;