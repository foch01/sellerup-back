import { Document, model, Model, Schema } from 'mongoose';

import { hash, compare } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';
import * as path from 'path';

const { env } = process;
const KEY_PASSPHRASE = env.KEY_PASSPHRASE;
const PRIVATE_KEY_PATH = env.PRIVATE_KEY || 'config/cert/private.pem';
const cwd = process.cwd();
const privateKey = readFileSync(path.resolve(cwd, PRIVATE_KEY_PATH), 'utf-8');

const userModelSchema = new Schema(
    {
        email: { type: String, unique: true },
        password: String,
        name: String,
        firstName: String,
        dateOfBirth: String,
    },
    { timestamps: true },
);

userModelSchema.pre('save', async function(next) {
    const user = this as UserModelType;
    await user.hashPassword();
    next();
});

export type UserModelType = Document & {
    email: string;
    password: string;
    name: string;
    firstName: string;
    dateOfBirth: string;
    comparePassword: comparePasswordFunction;
    createToken: createTokenFunction;
    hashPassword: hashPasswordFunction;
};

type comparePasswordFunction = (candidatePassword: string) => Promise<boolean>;

userModelSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
    return compare(candidatePassword, this.password);
};

type hashPasswordFunction = () => Promise<void>;
userModelSchema.methods.hashPassword = async function hashPassword(): Promise<void> {
    this.password = await hash(this.password, +env.SALT_ROUNDS);
};
type createTokenFunction = () => Promise<string>;

userModelSchema.methods.createToken = async function createToken(): Promise<string> {
    const expiresIn = '7d';
    return jwt.sign(
        {
            id: this.id,
            email: this.email,
        },
        { key: privateKey, passphrase: KEY_PASSPHRASE },
        {
            algorithm: 'RS256',
            expiresIn,
        },
    );
};
export const UserModelDb: Model<UserModelType> = model('UserModel', userModelSchema);
