import express from 'express';
import { putUser } from '@controllers/user.controller';

const userRoutes = express.Router();

userRoutes.route('/users/:userId').put(putUser);

export default userRoutes;
