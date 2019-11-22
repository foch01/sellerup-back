import { model, Model, Schema, Document } from "mongoose";

export type CityModelType = Document & {
    name: string;
};

const CityModelSchema = new Schema({
    name: String,
});

export const CityModelDb: Model<CityModelType> = model("CityModel", CityModelSchema);