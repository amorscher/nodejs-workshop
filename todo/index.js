const Router = require('express').Router;
const controller = require('./controller');

const router = Router();

router.get('/', controller.listAction);
router.get('/create', controller.createFormAction);
router.get('/delete/:id', controller.deleteAction);
router.post('/save',controller.saveAction);

module.exports = router;
