import express from "express";
import { postUser, putUser } from "@controllers/user.controller";

const userRoutes = express.Router();

userRoutes.route("/users").post(postUser);

userRoutes.route("/users/:userId").put(putUser);

export default userRoutes;