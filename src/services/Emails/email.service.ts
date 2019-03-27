import { EmailModelType } from "../../models/EmailModel";
import { getTransporter } from "./email-transporter.provider";
import { SentMessageInfo } from "nodemailer";
import Mail = require("nodemailer/lib/mailer");

class EmailService {
    public mailOptions: Mail.Options;
    public transporter: Mail;
    constructor(options: EmailModelType) {
        this.mailOptions.subject = options.subject;
        this.mailOptions.html = options.content;
    }

    public async sendEmail(): Promise<SentMessageInfo> {
        const info = await this.transporter.sendMail(this.mailOptions);
    }
}