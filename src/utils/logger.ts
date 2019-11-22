import { createLogger, transports } from "winston";
import { ENVIRONMENT } from "./secrets";

const options = {
    file: {
        level: "info",
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: "debug",
        handleExceptions: true,
        json: true,
        colorize: true,
    },
};

const logger = createLogger({
    transports: [
        new (transports.Console)(options.file),
        // new (winston.transports.Console)({ level: process.env.NODE_ENV === "production" ? "error" : "debug" }),
        new (transports.File)({ filename: "debug.log", level: "debug"})
    ]
});

if (process.env.NODE_ENV !== "production") {
    logger.log({level: "info", message:"Logging initialized at debug level"});
}

export default logger;

