const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./src/db/mongodb.manager.js');

const routes = require('./src/routes/');

const { HOST, PORT, MONGODB_URI } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

Database.init((err) => {
  if (err) console.log(err.message);

  app.listen(PORT || 3000, () => {
    console.log(`App listening on http://${HOST}:${PORT}`);
  });
}, MONGODB_URI);
