/* eslint-disable @typescript-eslint/no-explicit-any */
import { Express, NextFunction, Request, Response } from 'express';
import { AssertionError } from 'assert';
import { MongoError } from 'mongodb';
import Logger from '@utils/logger';

function attachErrorHandlers(app: Express) {
    app.use(function handleAssertError(err: any, req: Request, res: Response, next: NextFunction): any {
        if (err instanceof AssertionError) {
            Logger.log({ level: 'error', message: JSON.stringify(err) });
            return res.status(400).json({
                type: 'AssertionError',
                message: err.message,
            });
        }
        next(err);
    });

    app.use(function handleDatabaseError(err: any, req: Request, res: Response, next: NextFunction): any {
        if (err instanceof MongoError) {
            Logger.log({ level: 'error', message: JSON.stringify(err) });
            return res.status(503).json({
                type: 'MongoError',
                message: err.message,
            });
        }
        next(err);
    });

    app.use(function handleObjectIdError(err: any, req: Request, res: Response, next: NextFunction): any {
        if (err.kind === 'ObjectId') {
            Logger.log({ level: 'error', message: JSON.stringify(err) });
            return res.status(404).json({
                type: 'ObjectId',
                message: err.message,
            });
        }
        next(err);
    });
}

export default attachErrorHandlers;
