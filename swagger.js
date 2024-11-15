const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'CSE 341 Project 1 - Express & MongoDB'
  },

  host: 'localhost:3000', //'cse341-contacts-ky1j.onrender.com',
  schemes: ['http', 'https']
};

const output = './swagger.json';
const routes = ['./src/routes/index.js'];

swaggerAutogen(output, routes, doc);
