const Router = require('express').Router;
const controller = require('./controller');

const router = Router();

router.get('/', controller.listAction);
router.get('/delete/:id', controller.deleteAction);

module.exports = router;
