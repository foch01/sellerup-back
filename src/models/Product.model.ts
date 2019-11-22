import { Document, model, Model, Schema } from "mongoose";
import { EmailGroupModelType } from "@models/EmailGroupModel";

export type ProductModelType = Document & {
    title: string;
    price: number;
    imageURL: string;
    marketplace: string;
    ASIN: string;
    SKU: string;
    numberSell: number;
    numberUnitsInStock: number;
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
ProductModelSchema.path("price").get(function(num: number) {
    return (num / 100).toFixed(2);
});

// Setter
ProductModelSchema.path("price").set(function(num: number) {
    return num * 100;
});

export const ProductModelDb: Model<ProductModelType> = model("ProductModel", ProductModelSchema);