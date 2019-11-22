import { NextFunction, Request, Response } from "express";
import { OrderModelDb } from "@models/Order.model";
import asyncHandler from "@utils/asyncHandler";

/**
 *
 * @param req
 * @param res
 */
export const getAllOrder = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    res.json(await OrderModelDb.find());
});

/**
 *
 * @param req
 * @param res
 */
export const getOrder = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    res.json(await OrderModelDb.findById({_id: req.params.orderId}));
});