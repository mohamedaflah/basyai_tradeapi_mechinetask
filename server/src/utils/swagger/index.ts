import swaggerJsDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Basyai trade  - API Documentation',
            version: '1.0.0',
            description: 'Complete api documentation of Basyai trade api',
        },
    },
    apis: [
        './src/routers/*.ts',
    ],
};

export const swaggerSpecs = swaggerJsDoc(options);