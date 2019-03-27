import MwsApi from "amazon-mws";
import { confMWSHost, confShortNameCountry } from "../constants/ConfMWSConstant";
import moment = require("moment");
import { BuildRequestMWSUtils } from "../util/mws/BuildRequestMWSUtils";

export class SynchronizeAccountService {
    public static async addProducts(): Promise<any> {
        try {
            /*-------- REQUIS POUR LA REQUETE -----*/
            const accessKey = process.env.AWS_ACCESS_KEY_ID;
            const accessSecret = process.env.SECRET_KEY;
            const amazonMws = new MwsApi();
            amazonMws.setHost(confMWSHost.HOST_FR);
            amazonMws.setApiKey(accessKey, accessSecret);
            const marketPlaces = [
                confShortNameCountry.FR
            ];
            /*------- END -------*/
            const buildRequestReport = await BuildRequestMWSUtils.requestReport(marketPlaces);
            const sendRequestReport = await amazonMws.reports.submit(buildRequestReport);
            const reportRequestId = await sendRequestReport.ReportRequestInfo.ReportRequestId;
            console.log("response", JSON.stringify(sendRequestReport, undefined, 4));
            console.log(reportRequestId);
            const buildRequestGetReportList = await BuildRequestMWSUtils.getReportList(marketPlaces, reportRequestId);
            console.log("buildRequestGetReportList", buildRequestGetReportList);
            const sendRequestGetReportList = await amazonMws.reports.search(buildRequestGetReportList);
            const requestId = await sendRequestGetReportList.ResponseMetadata.RequestId;
            console.log("response", JSON.stringify(sendRequestGetReportList, undefined, 4));
            console.log(requestId);
            const buildGetReport = await BuildRequestMWSUtils.getReport(marketPlaces, requestId);
            const sendRequestGetReport = await amazonMws.reports.search(buildGetReport);
            console.log("response", JSON.stringify(sendRequestGetReport, undefined, 4));
        } catch (e) {
            console.log(e);
        }
    }
}