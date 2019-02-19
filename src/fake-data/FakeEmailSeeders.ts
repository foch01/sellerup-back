import { EmailGroupModelDb, EmailGroupModelType } from "../models/EmailGroupModel";
import { MONGODB_URI } from "../util/secrets";
import bluebird from "bluebird";
import { EmailModelDb, EmailModelType } from "../models/EmailModel";
const mongoose = require("mongoose");
const dummy = require("mongoose-dummy");

// CONNECT TO DB

const mongoUrl = MONGODB_URI;
(<any>mongoose).Promise = bluebird;
const options: any = {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10,
    bufferMaxEntries: 0,
};
mongoose.connect(mongoUrl, options).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    },
).catch(function (err: any) {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});

let i = 0;
while (i < 20) {
    const randomObjectEmail = dummy(EmailModelDb);
    const emailDb: EmailModelType = new EmailModelDb(randomObjectEmail);
    emailDb.save().then(
        data => { // resolve()
            console.log("Process 1:", data);
        },
        error => { // reject()
            console.log(error);
        });
    i++;
}

let j = 0;
while (j < 5) {
    const randomObjectEmailGroup = dummy(EmailGroupModelDb);
    const emailGroupDB: EmailGroupModelType = new EmailGroupModelDb(randomObjectEmailGroup);

    emailGroupDB.save().then(
        data => { // resolve()
            console.log("Process 1:", data);
        },
        error => { // reject()
            console.log(error);
        });
    j++;
}