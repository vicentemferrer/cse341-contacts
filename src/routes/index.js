const { Router } = require('express');

const contactsRoute = require('./contacts.route.js');

const router = new Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.use('/contacts', contactsRoute);

router.use(async (err, req, res, next) => {
  return res.status(err.status).setHeader('Content-Type', 'application/json').json({
    status: err.status,
    message: err.message
  });
});

module.exports = router;
