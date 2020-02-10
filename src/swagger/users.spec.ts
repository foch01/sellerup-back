import { HOST } from '@utils/secrets';
import { SwaggerOptions } from 'swagger-ui-express';

export const usersSchemas = {
    User: {
        type: 'object',
        properties: {
            email: {
                type: 'string',
                required: true,
            },
            password: {
                type: 'string',
                required: true,
            },
            name: {
                type: 'string',
            },
            firstName: {
                type: 'string',
            },
            dateOfBirth: {
                type: 'string',
            },
        },
    },
};

export const usersPaths: SwaggerOptions = {
    '/users': {
        post: {
            servers: [
                {
                    url: HOST,
                },
            ],
            description: 'Create User',
            tags: ['User'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/User',
                        },
                    },
                },
            },
            responses: {
                '200': {
                    description: 'A User object',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/User',
                            },
                        },
                    },
                },
            },
        },
    },
    '/login': {
        post: {
            servers: [
                {
                    url: HOST,
                },
            ],
            description: 'Get JWT token',
            tags: ['User'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                email: {
                                    type: 'string',
                                },
                                password: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                '200': {
                    description: 'A bearer token',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
        },
    },
    '/users/:userId': {
        put: {
            security: [
                {
                    bearerAuth: [],
                },
            ],
            description: 'Put user by ID',
            tags: ['User'],
            parameters: [
                {
                    in: 'path',
                    name: 'userId',
                    required: true,
                    schema: {
                        type: 'string',
                    },
                    description: 'The user ID',
                },
            ],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/User',
                        },
                    },
                },
            },
            responses: {
                '200': {
                    description: 'User update success',
                },
            },
        },
    },
};
