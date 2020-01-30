import { Transporter, createTransport, SendMailOptions, getTestMessageUrl } from 'nodemailer';
import Logger from '@utils/logger';
import { IS_PROD, TRANSPORTER_OPTIONS } from '@utils/secrets';
class EmailService {
    private _transporter: Transporter;

    constructor() {
        Logger.log('info', `${JSON.stringify(TRANSPORTER_OPTIONS)}`);
        this._transporter = createTransport(TRANSPORTER_OPTIONS);
    }
    public async sendEmail(options: SendMailOptions): Promise<void> {
        this._transporter.sendMail(options, (err, info) => {
            if (err) {
                Logger.log('error', err.message);
            }
            if (!IS_PROD) {
                Logger.log('info', `Preview URL: ${getTestMessageUrl(info)}`);
            }
        });
    }
}

export default new EmailService();
