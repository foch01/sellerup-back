import express from "express";
import { getAllSynchronize, deleteSynchronize, getSynchronize, postSynchronize, putSynchronize } from "../controllers/synchronize.controller";

const synchronizeRoutes = express.Router();

synchronizeRoutes.route("/synchronize")
    .get(getAllSynchronize)
    .post(postSynchronize);

export default synchronizeRoutes;