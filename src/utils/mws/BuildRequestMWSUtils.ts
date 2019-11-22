import * as MwsApi from "amazon-mws";
 import { confShortNameCountry } from "../../constants/ConfMWSConstant";

export class BuildRequestMWSUtils {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static getAllOrders = async (CreatedAfter: string, marketplaces: string[]): Promise<any> => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const build: any[] = [
                {
                    "Version": "2013-09-01",
                    "Action": "ListOrders",
                    "SellerId": process.env.SELLER_ID,
                    "MWSAuthToken": process.env.MWS_AUTH_TOKEN,
                    "CreatedAfter": new Date(CreatedAfter)
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

}