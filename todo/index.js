const Router = require('express').Router;
const controller = require('./controller');

const router = Router();

router.get('/', controller.listAction);

module.exports = router;
