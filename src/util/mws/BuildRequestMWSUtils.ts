import MwsApi from "amazon-mws";
import { confShortNameCountry } from "../../constants/ConfMWSConstant";

export class BuildRequestMWSUtils {

    static getAllOrders = async (createdAfter: Date, marketplaces: string[]): Promise<any> => {
        try {
            const build: any[] = [
                {
                    "Version": "2013-09-01",
                    "Action": "ListOrders",
                    "SellerId": process.env.SELLER_ID,
                    "MWSAuthToken": process.env.MWS_AUTH_TOKEN,
                    "CreatedAfter": new Date(2019, 1, 17)
                }
            ];
            let i = 1;
            marketplaces.forEach((marketplace: string) => {
                if (marketplace === confShortNameCountry.FR) {
                    build[0][`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_FR;
                } else if (marketplace === confShortNameCountry.DE) {
                    build[0][`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_DE;
                } else if (marketplace === confShortNameCountry.IT) {
                    build[0][`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_IT;
                } else if (marketplace === confShortNameCountry.UK) {
                    build[0][`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_UK;
                } else if (marketplace === confShortNameCountry.ES) {
                    build[0][`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_ES;
                }
                i++;
            });
            return build[0];
        } catch (e) {
            console.log("error", e);
        }
    }
    static requestReport = async (marketplaces: string[]): Promise<any> => {
        try {
            const buildRequest: any = {
                "Version": "2009-01-01",
                "Action": "RequestReport",
                "SellerId": process.env.SELLER_ID,
                "MWSAuthToken": process.env.MWS_AUTH_TOKEN,
                "ReportType": "_GET_MERCHANT_LISTINGS_ALL_DATA_"
                };
            let i = 1;
            marketplaces.forEach((marketplace: string) => {
                if (marketplace === confShortNameCountry.FR) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_FR;
                } else if (marketplace === confShortNameCountry.DE) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_DE;
                } else if (marketplace === confShortNameCountry.IT) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_IT;
                } else if (marketplace === confShortNameCountry.UK) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_UK;
                } else if (marketplace === confShortNameCountry.ES) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_ES;
                }
                i++;
            });
            return buildRequest;
        } catch (e) {
            console.log("error", e);
        }
    };
    static getReportList = async (marketplaces: string[], reportTypeListType: string): Promise<any> => {
        try {
            const buildRequest: any = {
                "Version": "2009-01-01",
                "Action": "GetReportRequestList",
                "SellerId": process.env.SELLER_ID,
                "MWSAuthToken": process.env.MWS_AUTH_TOKEN,
                "ReportRequestIdList.Id.1": reportTypeListType
            };
            let i = 1;
            marketplaces.forEach((marketplace: string) => {
                if (marketplace === confShortNameCountry.FR) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_FR;
                } else if (marketplace === confShortNameCountry.DE) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_DE;
                } else if (marketplace === confShortNameCountry.IT) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_IT;
                } else if (marketplace === confShortNameCountry.UK) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_UK;
                } else if (marketplace === confShortNameCountry.ES) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_ES;
                }
                i++;
            });
            return buildRequest;
        } catch (e) {
            console.log("error", e);
        }
    }
    static getReport = async (marketplaces: string[], reportId: string): Promise<any> => {
        try {
            const buildRequest: any = {
                "Version": "2009-01-01",
                "Action": "GetReport",
                "SellerId": process.env.SELLER_ID,
                "MWSAuthToken": process.env.MWS_AUTH_TOKEN,
                "ReportId": reportId
            };
            let i = 1;
            marketplaces.forEach((marketplace: string) => {
                if (marketplace === confShortNameCountry.FR) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_FR;
                } else if (marketplace === confShortNameCountry.DE) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_DE;
                } else if (marketplace === confShortNameCountry.IT) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_IT;
                } else if (marketplace === confShortNameCountry.UK) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_UK;
                } else if (marketplace === confShortNameCountry.ES) {
                    buildRequest[`MarketplaceId.Id.${i}`] = process.env.MARKETPLACE_ID_ES;
                }
                i++;
            });
            return buildRequest;
        } catch (e) {
            console.log("error", e);
        }
    }
}