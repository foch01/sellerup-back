import express from "express";
import { createShop, getAllShop, getShop, updateShop, deleteShop } from "@controllers/shop.controller";

const shopRoutes = express.Router();

shopRoutes.route("/shops")
    .post(createShop);

shopRoutes.route("/shops")
    .get(getAllShop);

shopRoutes.route("/shops/:shopId")
    .get(getShop);

shopRoutes.route("/shops/:shopId")
    .put(updateShop);

shopRoutes.route("/shops/:shopId")
    .delete(deleteShop);

export default shopRoutes;
