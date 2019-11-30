import express from "express";
import { postUser, putUser } from "@controllers/user.controller";

const userRoutes = express.Router();
/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User
 *   - name: Login
 *     description: Login
 */

/**
 * @swagger
 * /users:
 *   post:
 *     description: User post to the application
 *     tags: [User]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Email to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: name
 *         description: User's name.
 *         in: formData
 *         required: false
 *         type: string
 *       - name: FirstName
 *         description: User's firstName.
 *         in: formData
 *         required: false
 *         type: string
 *       - name: dateOfBirth
 *         description: User's dateOfBirth.
 *         in: formData
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *
 */


userRoutes.route("/users").post(postUser);

/**
 * @swagger
 * /users/:userId:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     description: User put to the application
 *     tags: [User]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Email to use for login.
 *         in: formData
 *         required: false
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: false
 *         type: string
 *       - name: name
 *         description: User's name.
 *         in: formData
 *         required: false
 *         type: string
 *       - name: FirstName
 *         description: User's firstName.
 *         in: formData
 *         required: false
 *         type: string
 *       - name: dateOfBirth
 *         description: User's dateOfBirth.
 *         in: formData
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *
 */

userRoutes.route("/users/:userId").put(putUser);

export default userRoutes;
