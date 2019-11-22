import MwsApi from "amazon-mws";
import { BuildRequestMWSUtils } from "@utils/mws/BuildRequestMWSUtils";
import { confMWSHost, confShortNameCountry } from "../constants/ConfMWSConstant";
import { Request, Response } from "express";
import moment from "moment";

export class MWS {
    static getAllOrders = async (req: Request, res: Response) => {
        try {
            /*-------- REQUIS POUR LA REQUETE -----*/
            const accessKey = process.env.AWS_ACCESS_KEY_ID;
            const accessSecret = process.env.SECRET_KEY;
            const amazonMws = new MwsApi();
            amazonMws.setHost(confMWSHost.HOST_FR);
            amazonMws.setApiKey(accessKey, accessSecret);
            const date = moment("2019-01-17").format("YYYY-MM-DD");
            /*------- END -------*/
            const marketPlaces = [
                confShortNameCountry.FR
            ];
            const buildRequestGetAllOrdersMWS = await BuildRequestMWSUtils.getAllOrders(date, marketPlaces);
            const getAllOrders = await amazonMws.orders.search(buildRequestGetAllOrdersMWS);
            console.log("response", JSON.stringify(getAllOrders, undefined, 4));
            res.render("home", {
                title: "Home"
            });
        } catch (e) {
            console.log("error", e);
        }
    };
}