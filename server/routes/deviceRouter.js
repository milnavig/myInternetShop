const Router = require('express');
const deviceController = require('../controllers/deviceController');
const actionRouter = require('./actionRouter');

const router = new Router();

router.use('/action', actionRouter);
router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

module.exports = router;