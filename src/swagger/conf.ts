import { SwaggerOptions } from "swagger-ui-express";

export const swaggerConfiguration: SwaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        components: {
            securitySchemes: { 
                bearerAuth: {
                    "type": "http",
                    "scheme": "bearer",
                    "bearerFormat": "JWT"
                }
            }
        },
        info: {
            title: "SellerUp NodeJS Swagger",
            version: "1.0.0",
            description:
                "Bienvenue sur le swagger de SellerUp",
            license: {
                name: "MIT",
                url: "https://choosealicense.com/licenses/mit/"
            },
            contact: {
                name: "SellerUp",
                url: "https://sellerup.io",
                email: "contact@sellerup.io"
            }
        },
        servers: [
            {
                url: "http://localhost:3000/api/"
            }
        ],
    },
    apis: ["./src/routes/*.ts", "./src/models/*.ts", "./src/swagger/*.spec.yml"]
};