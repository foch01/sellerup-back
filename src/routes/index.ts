import express from "express";
import orderRouter from "./orders";

const router = express.Router();

router.use(orderRouter);

export default router;