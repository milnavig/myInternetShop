const Router = require('express');
const deviceController = require('../controllers/deviceController');
const commentRouter = require('./commentRouter');

const router = new Router();

router.post('/like/', deviceController.like);
router.use('/comment/', commentRouter);

module.exports = router;