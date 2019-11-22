import express from "express";
import { getAllOrder, getOrder } from "@controllers/order.controller";

const orderRoutes = express.Router();

orderRoutes.route("/orders")
    .get(getAllOrder);

orderRoutes.route("/orders/:orderId")
    .get(getOrder);

export default orderRoutes;