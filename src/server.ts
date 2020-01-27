import 'module-alias/register';
import errorHandler from 'errorhandler';

import app from './app';
// import { LogUtil } from "@utils/LogUtil";

import displayRoutes from 'express-routemap';

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
    displayRoutes(app);
    console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

export default server;
