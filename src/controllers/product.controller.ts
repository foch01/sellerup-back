import { Request, Response } from "express";
import asyncHandler from "../util/asyncHandler";
import { ProductModelDb } from "../models/Product.model";

export let getAllProduct = asyncHandler(async (req: Request, res: Response) => {
    res.json(await ProductModelDb.find());
});

export let getProduct = asyncHandler(async (req: Request, res: Response) => {
    res.json(await ProductModelDb.findById(req.params.productId));
});