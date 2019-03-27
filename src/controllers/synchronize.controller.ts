import { Request, Response } from "express";
import { SynchronizeAccountService } from "../services/SynchronizeAccountService";
import asyncHandler from "../util/asyncHandler";

export let getAllSynchronize = asyncHandler( async (req: Request, res: Response) => {
});

export let getSynchronize = asyncHandler(async (req: Request, res: Response) => {

});

export let postSynchronize = asyncHandler( async (req: Request, res: Response) => {
    await SynchronizeAccountService.addProducts();
});

export let putSynchronize = asyncHandler( async (req: Request, res: Response) => {

});

export let deleteSynchronize = asyncHandler( async (req: Request, res: Response) => {

});