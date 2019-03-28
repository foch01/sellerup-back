import express from "express";
import orderRoutes from "./order.routes";
import productRoutes from "./product.routes";
// import synchronizeRoutes from "./synchronize.routes";

const router = express.Router();

router.use(orderRoutes);
router.use(productRoutes);
// router.use(synchronizeRoutes);

export default router;