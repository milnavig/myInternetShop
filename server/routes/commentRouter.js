const Router = require('express');
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/', authMiddleware, commentController.create);
router.get('/:deviceID', commentController.getDeviceComments);
//router.get('/', commentController.getDeviceComments);

module.exports = router;