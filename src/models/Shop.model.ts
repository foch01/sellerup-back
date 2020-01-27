import { model, Model, Schema, Document } from "mongoose";

export type ShopModelType = Document & {
    name: string;
    sellerId: string;
    secretKey: string;
};

const ShopModelSchema = new Schema({
    name: String,
    sellerId: String,
    secretKey: String
});

export const ShopModelDb: Model<ShopModelType> = model("ShopModel", ShopModelSchema);
