const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'User API', 
        description: 'Users Api'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate the swagger.json file at the root of the project
swaggerAutogen(outputFile, endpointsFiles, doc);