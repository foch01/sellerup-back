import { NextFunction, Request, Response } from "express";
import { CompanyModelDb, CompanyModelType } from "@models/Company.model";
import asyncHandler from "@utils/asyncHandler";

/**
 *
 * @param req
 * @param res
 */
export const createCompany = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    const company: CompanyModelType = req.body;
    res.json(await CompanyModelDb.create(company));
});

/**
 *
 * @param req
 * @param res
 */
export const getAllCompany = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    res.json(await CompanyModelDb.find());
});

/**
 *
 * @param req
 * @param res
 */
export const getCompany = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    res.json(await CompanyModelDb.findById({ _id: req.params.companyId }));
});

/**
 *
 * @param req
 * @param res
 */
export const updateCompany = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    res.json(await CompanyModelDb.findOneAndUpdate({ _id: req.params.companyId }, req.body, { new: true }));
});

/**
 *
 * @param req
 * @param res
 */
export const deleteCompany = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    res.json(await CompanyModelDb.deleteOne({ _id: req.params.companyId }));
});