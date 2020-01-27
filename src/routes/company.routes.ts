import express from "express";
import { createCompany, getAllCompany, getCompany, updateCompany, deleteCompany } from "@controllers/company.controller";

const companyRoutes = express.Router();

companyRoutes.route("/companies")
    .post(createCompany);

companyRoutes.route("/companies")
    .get(getAllCompany);


companyRoutes.route("/companies/:companyId")
    .get(getCompany);



companyRoutes.route("/companies/:companyId")
    .put(updateCompany);


companyRoutes.route("/companies/:companyId")
    .delete(deleteCompany);

export default companyRoutes;
