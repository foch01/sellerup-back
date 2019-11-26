import express from "express";
import { postLogin, postUser, putUser } from "@controllers/user.controller";

const userRoutes = express.Router();

userRoutes.route("/users").post(postUser);

userRoutes.route("/users/:userId").put(putUser);

userRoutes.route("/login").post(postLogin);

export default userRoutes;