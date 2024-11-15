const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./src/db/mongodb.manager.js');

const routes = require('./src/routes/');

const { HOST, PORT, MONGODB_URI } = process.env;

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-KeyI'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

Database.init((err) => {
  if (err) console.log(err.message);

  app.listen(PORT || 3000, () => {
    console.log(`App listening on http://${HOST}:${PORT}`);
  });
}, MONGODB_URI);
