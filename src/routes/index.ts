import express from "express";
import orderRoutes from "./order.routes";

const router = express.Router();

router.use(orderRoutes);

export default router;