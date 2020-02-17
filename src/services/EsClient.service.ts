import { Client } from '@elastic/elasticsearch';

class EsClientService {
    public client: Client;

    constructor() {
        this.client = new Client({
            node: process.env.ELASTIC_ADDRESS || 'http://localhost:9200',
            auth: {
                username: 'elastic',
                password: 'coluche123',
            },
        });
    }
}

export default new EsClientService();
