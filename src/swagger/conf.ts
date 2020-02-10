import { SwaggerOptions } from 'swagger-ui-express';

import { HOST } from '@utils/secrets';

export const swaggerConfiguration: SwaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        info: {
            title: 'SellerUp NodeJS Swagger',
            version: '1.0.0',
            description: 'Bienvenue sur le swagger de SellerUp',
            license: {
                name: 'MIT',
                url: 'https://choosealicense.com/licenses/mit/',
            },
            contact: {
                name: 'SellerUp',
                url: 'https://sellerup.io',
                email: 'contact@sellerup.io',
            },
        },
        servers: [
            {
                url: `${HOST}api/`,
            },
        ],
    },
    apis: ['./src/swagger/*.spec.yml'],
};
