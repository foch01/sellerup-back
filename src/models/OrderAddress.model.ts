import { model, Model, Schema, Document, SchemaTypes } from "mongoose";
import { ZipCodeModelType } from "./ZipCode.model";
import { CityModelType } from "./City.model";

export type OrderAddressModelType = Document & {
    name: string,
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    city: CityModelType,
    county: string,
    district: string,
    stateOrRegion: string,
    zipCode: ZipCodeModelType,
    countryCode: string,
};

const OrderAddressModelSchema = new Schema({
    name: String,
    addressLine1: String,
    addressLine2: String,
    addressLine3: String,
    city: {type: SchemaTypes.ObjectId, ref: "CityModel"},
    county: String,
    district: String,
    stateOrRegion: String,
    zipCode: {type: SchemaTypes.ObjectId, ref: "ZipCodeModel"},
    countryCode: String,
}, { timestamps: true });

export const OrderAddressModelDb: Model<OrderAddressModelType> = model("OrderAddressModel", OrderAddressModelSchema);