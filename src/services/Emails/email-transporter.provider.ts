import { createTransport, createTestAccount } from "nodemailer";
import Mail = require("nodemailer/lib/mailer");
const {env} = process;

export async function getTransporter(): Promise<Mail> {
    if (env.ENVIRONNEMENT === "DEVLOCAL") {
        const account = await createTestAccount();
        return createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass // generated ethereal password
            }
        });
    }
}