import Redis from 'ioredis';
import { REDIS_OPTIONS, EMAIL_RECEIVE_TEST, IS_PROD } from '@utils/secrets';
import Logger from '@utils/logger';
import { RedisEmail, OrderEmail, AmazonOrderDatatype } from '@type/types';
import EmailService from '@services/Email.service';
import { EmailModelDb } from '@models/EmailModel';
import sanitize from 'sanitize-html';

class RedisEmailService {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private client: any;

    constructor() {
        this.client = new Redis(REDIS_OPTIONS);
    }

    public initialize(): void {
        // Todo improve redis channel
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.client.subscribe('email', (err: any) => {
            if (err) {
                Logger.log('error', err);
            }
        });
        this.client.on('message', (channel: string, message: string) => {
            const redisEmail: RedisEmail = JSON.parse(message);
            try {
                this.sendToEmailService(redisEmail);
            } catch (e) {
                throw new Error(e);
            }
        });
    }

    private async sendToEmailService(redisEmail: RedisEmail): Promise<void> {
        try {
            const email = await this.generateEmail(redisEmail);
            EmailService.sendEmail(email);
        } catch (e) {
            throw new Error(e);
        }
    }

    private async generateEmail({ emailModelId, orderId }: RedisEmail): Promise<OrderEmail> {
        try {
            const emailModel = await EmailModelDb.findById(emailModelId);

            if (!emailModel) {
                Logger.log('error', `Email model with ID ${emailModelId} doesn't exist`);
            }

            // Todo find order in ES, and replace variables in email model content
            const amazonOrder: AmazonOrderDatatype = {
                AmazonOrderId: '',
                LastUpdateDate: '',
                PurchaseDate: '',
                OrderStatus: '',
            };

            const html = await this.transformTemplate(emailModel.content, amazonOrder);

            // Remove HTML tags
            const text = sanitize(html);

            if (!IS_PROD) {
                amazonOrder.BuyerEmail = EMAIL_RECEIVE_TEST;
            }

            const orderEmail: OrderEmail = {
                to: amazonOrder.BuyerEmail,
                subject: emailModel.subject,
                text,
                html,
            };

            return orderEmail;
        } catch (e) {
            throw new Error(e);
        }
    }

    // Todo implement this
    private async transformTemplate(emailModelContent: string, amazonOrder: AmazonOrderDatatype): Promise<string> {
        return '';
    }
}

export default new RedisEmailService();
