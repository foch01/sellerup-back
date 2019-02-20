import { model, Model, Schema, SchemaTypes, Document } from "mongoose";
import { EmailGroupModelType } from "./EmailGroupModel";

export type EmailModelType = Document & {
    title: string,
    subject: string,
    content: string,
    joinInvoice: boolean,
    channelSelling: string,
    dateTimeAfterOrderStatus: string,
    productReturn: boolean,
    negativeReview: boolean,
    sendAllProductAllTheShop: boolean,
    listMultipleProductASIN: string[]
    emailGroup: EmailGroupModelType[]
};

export const EmailModelSchema = new Schema({
        title: String,
        subject: String,
        content: String,
        joinInvoice: String,
        channelSelling: String,
        dateTimeAfterOrderStatus: String,
        productReturn: String,
        negativeReview: String,
        sendAllProductAllTheShop: Boolean,
        listMultipleProductASIN: [String],
        emailGroup: [{type: SchemaTypes.ObjectId, ref: "EmailGroupModel"}]
    },
    {
        timestamps: true,
        usePushEach: true
    });

export const EmailModelDb: Model<EmailModelType> = model("EmailModel", EmailModelSchema);

