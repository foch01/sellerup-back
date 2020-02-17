import { Request, Response, NextFunction } from 'express';
import asyncHandler from '@utils/asyncHandler';
import EsClientService from '@services/EsClient.service';

/**
 * Create user account
 * @param req
 * @param res
 * @param next
 */
export const pingElasticSearch = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(201).json(await EsClientService.client.ping());
});
