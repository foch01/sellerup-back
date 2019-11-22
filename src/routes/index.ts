import express from "express";
import orderRoutes from "@routes/order.routes";
import productRoutes from "@routes/product.routes";

const router = express.Router();

router.use(orderRoutes);
router.use(productRoutes);

export default router;