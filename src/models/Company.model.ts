import { model, Model, Schema, Document } from 'mongoose';

export type CompanyModelType = Document & {
    name: string;
    siretNumber: string;
    sirenNumber: string;
};

const CompanyModelSchema = new Schema({
    name: String,
    siretNumber: String,
    sirenNumber: String,
});

export const CompanyModelDb: Model<CompanyModelType> = model('CompanyModel', CompanyModelSchema);
