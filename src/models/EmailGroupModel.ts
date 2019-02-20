import { Document, model, Model, Schema, SchemaTypes } from "mongoose";
import { EmailModelType } from "./EmailModel";

export type EmailGroupModelType = Document & {
    name: string
};

export const EmailGroupModelSchema = new Schema({
        name: String
    },
    {
        timestamps: true,
    });

export const EmailGroupModelDb: Model<EmailGroupModelType> = model("EmailGroupModel", EmailGroupModelSchema);