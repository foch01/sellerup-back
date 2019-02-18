import MwsApi from "amazon-mws";

export class MWS {
    static getAllOrders = async () => {
        const accessKey = "AKIAILXI57P5Z5NHUGKA";
        const accessSecret = "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";
        const amazonMws = new MwsApi();
        amazonMws.setApiKey(accessKey, accessSecret);
        // console.log("CONNEXION", amazonMws);
        try {
            const response: any =  await amazonMws.orders.search({
                "Version": "2013-09-01",
                "Action": "ListOrders",
                "SellerId": "ANVTZP44ZDKG6",
                "MWSAuthToken": "amzn.mws.7ab39b95-14db-4973-d640-2bac2057d662",
                "MarketplaceId.Id.1": "A13V1IB3VIYZZH",
                "LastUpdatedAfter": new Date(2019, 2, 16)
            });
            console.log("response", response);
        } catch (e) {
            console.log("error", e);
        }
/*        await amazonMws.orders.search({
            "Version": "2013-09-01",
            "Action": "ListOrders",
            "SellerId": "ANVTZP44ZDKG6",
            "MWSAuthToken": "amzn.mws.7ab39b95-14db-4973-d640-2bac2057d662",
            "MarketplaceId.Id.1": "A13V1IB3VIYZZH",
            "LastUpdatedAfter": new Date(2019, 2, 16)
        }).then(
            data => { // resolve()
                console.log("Process 1:", data);
            },
            error => { // reject()
                console.log(error);
            });*/
    }
}