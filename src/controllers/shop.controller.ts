import { NextFunction, Request, Response } from "express";
import { ShopModelDb, ShopModelType } from "@models/Shop.model";
import asyncHandler from "@utils/asyncHandler";

/**
 *
 * @param req
 * @param res
 */
export const createShop = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    const shop: ShopModelType = req.body;
    res.json(await ShopModelDb.create(shop));
});

/**
 *
 * @param req
 * @param res
 */
export const getAllShop = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    res.json(await ShopModelDb.find());
});

/**
 *
 * @param req
 * @param res
 */
export const getShop = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    res.json(await ShopModelDb.findById({ _id: req.params.shopId }));
});

/**
 *
 * @param req
 * @param res
 */
export const updateShop = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    res.json(await ShopModelDb.findOneAndUpdate({ _id: req.params.shopId }, req.body, { new: true }));
});

/**
 *
 * @param req
 * @param res
 */
export const deleteShop = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
    res.json(await ShopModelDb.deleteOne({ _id: req.params.shopId }));
});
