import swaggerJsDoc from "swagger-jsdoc";
// require('../../routers/*.ts')
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
        '../../routers/*.ts',
    ],
};

export const swaggerSpecs = swaggerJsDoc(options);