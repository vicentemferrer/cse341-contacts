const { Router } = require('express');
const { serve, setup } = require('swagger-ui-express');

const swaggerDocument = require('../../swagger.json');

const router = new Router();

router.use(serve);
router.get('/', setup(swaggerDocument));

module.exports = router;
