import Logger from './logger';
import dotenv from 'dotenv';
import fs from 'fs';
import { SmtpOptions } from 'nodemailer-smtp-transport';

const { env } = process;

if (fs.existsSync('.env')) {
    Logger.debug('Using .env file to supply config environment variables');
    dotenv.config({ path: '.env' });
} else {
    Logger.debug('Using .env.example file to supply config environment variables');
    dotenv.config({ path: '.env.example' }); // you can delete this after you create your own .env file!
}
const ENVIRONMENT = env.NODE_ENV;
const IS_PROD = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

const SESSION_SECRET = env['SESSION_SECRET'];
const MONGODB_URI = IS_PROD ? env['MONGODB_URI'] : env['MONGODB_URI_LOCAL'];

if (!SESSION_SECRET) {
    Logger.error('No client secret. Set SESSION_SECRET environment variable.');
    process.exit(1);
}

if (!MONGODB_URI) {
    Logger.error('No mongo connection string. Set MONGODB_URI environment variable.');
    process.exit(1);
}

const TRANSPORTER_OPTIONS: SmtpOptions = {};

if (IS_PROD) {
    TRANSPORTER_OPTIONS.host = env.EMAIL_HOST;
    TRANSPORTER_OPTIONS.port = Number(env.EMAIL_PORT);
    TRANSPORTER_OPTIONS.auth = {
        user: env.EMAIL_AUTH_USER,
        pass: env.EMAIL_AUTH_PASS,
    };
} else {
    TRANSPORTER_OPTIONS.host = 'smtp.ethereal.email';
    TRANSPORTER_OPTIONS.port = 587;
    TRANSPORTER_OPTIONS.auth = {
        user: 'wilford.reichel@ethereal.email',
        pass: '8tGmnmA82UUQ12kS2x',
    };
}

export { ENVIRONMENT, MONGODB_URI, SESSION_SECRET, IS_PROD, TRANSPORTER_OPTIONS };
