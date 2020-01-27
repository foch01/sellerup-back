import { EmailGroupModelDb, EmailGroupModelType } from '../models/EmailGroupModel';
import { MONGODB_URI } from '@utils/secrets';
import { EmailModelDb, EmailModelType } from '../models/EmailModel';
import { OrderModelDb, OrderModelType } from '../models/Order.model';
import { ProductModelDb, ProductModelType } from '../models/Product.model';
import mongoose from 'mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dummy = require('mongoose-dummy');

// CONNECT TO DB

const mongoUrl = MONGODB_URI;
const options: mongoose.ConnectionOptions = {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10,
    bufferMaxEntries: 0,
};
mongoose
    .connect(mongoUrl, options)
    .then(
        () => {
            /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    )
    .catch(function(err: any) {
        console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
        // process.exit();
    });

let i = 0;
while (i < 20) {
    const randomObjectEmail = dummy(EmailModelDb);
    const emailDb: EmailModelType = new EmailModelDb(randomObjectEmail);
    emailDb.save().then(
        data => {
            // resolve()
            console.log('Process 1:', data);
        },
        error => {
            // reject()
            console.log(error);
        },
    );
    i++;
}

let toto = 0;
while (toto < 20) {
    const randomOrder = dummy(OrderModelDb);
    const orderDb: OrderModelType = new OrderModelDb(randomOrder);
    orderDb.save().then(
        data => {
            // resolve()
            console.log('Process 1:', data);
        },
        error => {
            // reject()
            console.log(error);
        },
    );
    toto++;
}
// Génération fake product
let k = 0;
while (k < 20) {
    const randomProduct = dummy(ProductModelDb);
    const productDb: ProductModelType = new ProductModelDb(randomProduct);
    productDb.save().then(
        data => {
            // resolve()
            console.log('Process 1:', data);
        },
        error => {
            // reject()
            console.log(error);
        },
    );
    k++;
}

let j = 0;
while (j < 5) {
    const randomObjectEmailGroup = dummy(EmailGroupModelDb);
    const emailGroupDB: EmailGroupModelType = new EmailGroupModelDb(randomObjectEmailGroup);

    emailGroupDB.save().then(
        data => {
            // resolve()
            console.log('Process 1:', data);
        },
        error => {
            // reject()
            console.log(error);
        },
    );
    j++;
}
