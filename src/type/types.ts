import { Attachment } from 'nodemailer/lib/mailer';

export type RedisEmail = {
    emailModelId: string;
    orderId: string;
};

export type OrderEmail = {
    to: string | string[];
    subject: string;
    text: string;
    html: string;
    attachments?: Attachment[];
};

export type AmazonOrderDatatype = {
    AmazonOrderId: string;
    SellerOrderId?: string;
    PurchaseDate: string;
    LastUpdateDate: string;
    OrderStatus: string;
    FullfillmentChannel?: string;
    SalesChannel?: string;
    OrderChannel?: string;
    ShipServiceLevel?: string;
    ShippingAddress?: string;
    OrderTotal?: string;
    NumberOfItemsShipped?: number;
    NumberOfItemsUnshipped?: number;
    PaymentMethod?: string;
    PaymentMethodDetails?: string;
    IsReplacementOrder?: boolean;
    ReplacedOrderId?: string;
    MarketplaceId?: string;
    BuyerEmail?: string;
    BuyerName?: string;
    BuyerCountry?: string;
    BuyerTaxInfo?: string;
    ShipmentServiceLevelCategory?: string;
    EasyShipShipmentStatus?: string;
    OrderType?: string;
    EarliestShipDate?: Date;
    LatestShipDate?: string;
    EarliestDeliveryDate?: string;
    LatestDeliveryDate?: string;
    IsBusinessOrder?: boolean;
    PurchaseOrderNumber?: string;
    IsPrime?: boolean;
    IsPremiumOrder?: boolean;
    PromiseResponseDueDate?: string;
    IsEstimatedShipDateSet?: string;
};
