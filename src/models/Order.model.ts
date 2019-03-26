import { model, Model, Schema, Document, SchemaTypes } from "mongoose";
import { OrderAddressModelType } from "./OrderAddress.model";

export type OrderModelType = Document & {
    amazonOrderId: string,
    sellerOrderId: string,
    purchaseDate: Date,
    lastUpdateDate: Date,
    orderStatus: string,
    fulfillmentChannel: string,
    salesChannel: string,
    orderChannel: string,
    shipServiceLevel: string,
    shippingAddress: OrderAddressModelType,
    orderTotal: string,
    numberOfItemsShipped: number,
    numberOfItemsUnshipped: number,
    isReplacementOrder: boolean,
    replacedOrderId: string,
    marketplaceId: string,
    buyerEmail: string,
    buyerName: string,
    shipmentServiceLevelCategory: string,
    isBusinessOrder: boolean,
    purchaseOrderNumber: string,
    isPrime: boolean,
    isPremiumOrder: boolean,
};

const OrderModelSchema = new Schema({
    amazonOrderId: { type: String, unique: true },
    sellerOrderId: String,
    purchaseDate: Date,
    lastUpdateDate: Date,
    orderStatus: String,
    fulfillmentChannel: String,
    salesChannel: String,
    orderChannel: String,
    shipServiceLevel: String,
    shippingAddress: {type: SchemaTypes.ObjectId, ref: "OrderAddressModel"},
    orderTotal: String,
    numberOfItemsShipped: Number,
    numberOfItemsUnshipped: Number,
    isReplacementOrder: Boolean,
    replacedOrderId: String,
    marketplaceId: String,
    buyerEmail: String,
    buyerName: String,
    shipmentServiceLevelCategory: String,
    isBusinessOrder: Boolean,
    purchaseOrderNumber: String,
    isPrime: Boolean,
    isPremiumOrder: Boolean,
}, { timestamps: true });

export const OrderModelDb: Model<OrderModelType> = model("OrderModel", OrderModelSchema);