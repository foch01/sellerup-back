import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import mongo from "connect-mongo";
import flash from "express-flash";
import path from "path";
import mongoose from "mongoose";
import passport from "passport";
import bluebird from "bluebird";
import { MONGODB_URI, SESSION_SECRET } from "@utils/secrets";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerConfiguration } from "./swagger/conf";
import router from "./routes";

const MongoStore = mongo(session);

// Controllers (route handlers)
import * as apiController from "@controllers/api";
import { postLogin, postUser } from "@controllers/user.controller";

// Create Express server
const app = express();
const swaggerSpec = swaggerJSDoc(swaggerConfiguration);

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
mongoose.Promise = bluebird;

const options: mongoose.ConnectionOptions = {
    autoCreate: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true,
    useFindAndModify: true,
};

mongoose.connect(mongoUrl, options).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: new MongoStore({
        url: mongoUrl,
        autoReconnect: true
    })
}));
app.use(passport.initialize());
import setPassportStrategies from "./config/passport";
setPassportStrategies(passport);


// app.use(passport.session());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * API examples routes.
 */
app.get(["/","/api"], apiController.getApi);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.post("/login", postLogin);
app.post("/users", postUser);
app.use("/api/", passport.authenticate("jwt", { session: false }), router );

/**
 * Attach error handler
 */
import attachErrorHandlers from "@utils/errorHandler";
attachErrorHandlers(app);

export default app;
