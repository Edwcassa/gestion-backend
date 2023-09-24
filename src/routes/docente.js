const express = require("express")
const controller = require("../controllers/docente")

const router = express.Router();

router.get('/docentes', controller.getAllDocentes);
/**
 * @swagger
 * /api/docentes:
 *   get:
 *     summary: Listar todos los docentes
 *     description: Listar todos los docentes
 *     tags:
 *       - Docente
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  ok:
 *                    type: boolean
 *                  docentes:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Docente'
 *       '500':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */

router.get("/docentes/:id", controller.getDocenteById);
/**
 * @swagger
 * /api/docentes/{id}:
 *    get:
 *      summary: Obtener un docente por ID
 *      description: Obtener un docente por ID
 *      tags:
 *        - Docente
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
 *                type: object
 *                properties:
 *                  ok:
 *                    type: boolean
 *                  docente:
 *                    $ref: '#/components/schemas/Docente'
 *        '500':
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ErrorResult'
 */

router.post('/docentes', controller.createDocente);
/**
 * @swagger
 * /api/docentes:
 *   post:
 *     summary: Crear un docente
 *     description: Crear un docente
 *     tags:
 *       - Docente
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Docente'
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
 *                  $ref: '#/components/schemas/Docente'
 *       '500':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */

router.put('/docentes/:id', controller.updateDocente);
/**
 * @swagger
 * /api/docentes/{id}:
 *   put:
 *     summary: Actualizar un docente
 *     description: Actualizar un docente
 *     tags:
 *       - Docente
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
 *             $ref: '#/components/schemas/Docente'
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
 *                  $ref: '#/components/schemas/Docente'
 *       '500':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */

router.delete('/docentes/:id', controller.deleteDocente);
/**
 * @swagger
 * /api/docentes/{id}:
 *   delete:
 *     summary: Eliminar un docente
 *     description: Eliminar un docente
 *     tags:
 *       - Docente
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
 *                $ref: '#/components/schemas/StatusResult'
 *       '500':
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *               $ref: '#/components/schemas/ErrorResult'
 */ 

module.exports = router;


/**
 * @swagger
 * components:
 *   schemas:
 *     StatusResult:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ErrorResult:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         msg:
 *           type: string
 *       example:
 *         ok: false
 *         msg: Error server
 */