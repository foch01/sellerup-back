import { Document, model, Model, Schema, SchemaTypes } from "mongoose";
import { EmailGroupModelType } from "./EmailGroupModel";

export type ProductModelType = Document & {
    title: string,
    price: Number,
    imageURL: string,
    marketplace: string,
    ASIN: string,
    SKU: string,
    numberSell: number,
    numberUnitsInStock: number
};

export const ProductModelSchema = new Schema({
    title: String,
    price: Number,
    imageURL: String,
    marketplace: String,
    ASIN: String,
    SKU: String,
    numberSell: Number,
    numberUnitsInStock: Number
    },
    {
        timestamps: true,
        usePushEach: true
    });

// Getter
ProductModelSchema.path("price").get(function(num: any) {
    return (num / 100).toFixed(2);
});

// Setter
ProductModelSchema.path("price").set(function(num: any) {
    return num * 100;
});

export const ProductModelDb: Model<ProductModelType> = model("ProductModel", ProductModelSchema);