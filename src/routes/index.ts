import express from "express";
import orderRoutes from "@routes/order.routes";
import productRoutes from "@routes/product.routes";
import companyRoutes from "@routes/company.routes";
import userRoutes from "@routes/user.routes";

const router = express.Router();

router.use(orderRoutes);
router.use(productRoutes);
router.use(companyRoutes);
router.use(userRoutes);

export default router;