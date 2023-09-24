const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gestion Academica API Docs", 
      version: '1.0.0',
    }
  },
  apis: ["./src/routes/*.js", "./src/models/*.js"],
};

const swaggerDocs = swaggerJsdoc(options);

module.exports = swaggerDocs;