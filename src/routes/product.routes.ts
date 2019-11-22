import express from "express";
import { getAllProduct, getProduct } from "@controllers/product.controller";

const productRoutes = express.Router();

productRoutes.route("/products")
    .get(getAllProduct);

productRoutes.route("/products/:productId")
    .get(getProduct);

export default productRoutes;