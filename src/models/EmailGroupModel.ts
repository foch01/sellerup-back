import { Document, model, Model, Schema } from 'mongoose';
import { EmailModelType } from '@models/EmailModel';

export type EmailGroupModelType = Document & {
    name: string;
};

export const EmailGroupModelSchema = new Schema(
    {
        name: String,
    },
    {
        timestamps: true,
    },
);

export const EmailGroupModelDb: Model<EmailGroupModelType> = model('EmailGroupModel', EmailGroupModelSchema);
