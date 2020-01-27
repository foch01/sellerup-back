import { Request, Response } from 'express';
import asyncHandler from '@utils/asyncHandler';
import { ProductModelDb } from '@models/Product.model';

export const getAllProduct = asyncHandler(async (req: Request, res: Response) => {
    res.json(await ProductModelDb.find());
});

export const getProduct = asyncHandler(async (req: Request, res: Response) => {
    res.json(await ProductModelDb.findById(req.params.productId));
});
