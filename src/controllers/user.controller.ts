import { Request, Response, NextFunction } from 'express';
import asyncHandler from '@utils/asyncHandler';
import { UserModelDb, UserModelType } from '@models/User.model';
import { BadCredentialsError } from '@type/custom-errors';

/**
 * Create user account
 * @param req
 * @param res
 * @param next
 */
export const postUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const user: UserModelType = req.body;
    res.status(201).json(await UserModelDb.create(user));
});

/**
 * PUT /users/:userId
 */
export const putUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const userBody: UserModelType = req.body;
    const user = await UserModelDb.findById(req.params.userId);
    Object.assign(user, userBody);
    res.json(await user.save());
});

/**
 * POST /login
 * Sign in using email and password.
 */
export const postLogin = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await UserModelDb.findOne({ email });
    if (user && (await user.comparePassword(password))) {
        return res.json(await user.createToken());
    } else {
        throw new BadCredentialsError();
    }
});
