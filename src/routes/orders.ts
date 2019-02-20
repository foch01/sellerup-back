import express from "express";
import { getAllOrder, deleteOrder, getOrder, postOrder, putOrder } from "../controllers/order";

const orderRouter = express.Router();

orderRouter.route("/orders")
    .get(getAllOrder)
    .post(postOrder);

orderRouter.route("/orders/:orderId")
    .get(getOrder)
    .put(putOrder)
    .delete(deleteOrder);

export default orderRouter;