import logger from "./logger";
const util = require("util");

export class LogUtil {
    static info = (...list: any[]) => {
        if (process.env.ENVIRONNEMENT == "DEVLOCAL" || process.env.ENVIRONNEMENT == "PREPROD") {
            console.log(list);
        } else if (process.env.ENVIRONNEMENT === "PROD") {
            logger.info(util.format(...list));
        }
    };
    static err = (...list: any[]) => {
        if (process.env.ENVIRONNEMENT == "DEVLOCAL" || process.env.ENVIRONNEMENT == "PREPROD") {
            console.error(list);
        } else if (process.env.ENVIRONNEMENT === "PROD") {
            logger.error(util.format(...list));
        }
    };

    static warn = (...list: any[]) => {
        if (process.env.ENVIRONNEMENT == "DEVLOCAL" || process.env.ENVIRONNEMENT == "PREPROD") {
            console.warn(list);
        } else if (process.env.ENVIRONNEMENT === "PROD") {
            logger.warn(util.format(...list));
        }
    }
}
