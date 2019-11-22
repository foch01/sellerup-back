import { model, Model, Schema, Document } from "mongoose";

export type ZipCodeModelType = Document & {
    code: string;
};

const ZipCodeModelSchema = new Schema({
    code: String,
});

export const ZipCodeModelDb: Model<ZipCodeModelType> = model("ZipCodeModel", ZipCodeModelSchema);