import express from 'express';
import { putUser } from '@controllers/user.controller';

const userRoutes = express.Router();
/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           required: true
 *         password:
 *           type: string
 *           required: true
 *         name:
 *           type: string
 *         firstName:
 *           type: string
 *         dateOfBirth:
 *           type: string
 */

/**
 * @swagger
 * /users/:userId:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     description: Put user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: User update success
 */

userRoutes.route('/users/:userId').put(putUser);

export default userRoutes;
