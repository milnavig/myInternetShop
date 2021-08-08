const {Comment, User} = require('../models/models');
const ApiError = require('../error/APIError');

class CommentController {
    async create(req, res) {
        const id = req.user.id;
        const { text, deviceId } = req.body;
        console.dir(req.body);
        console.log(req.user)

        const comment = await Comment.create({text, deviceId: deviceId, userId: id});
        
        return res.json(comment);
    }

    async getDeviceComments(req, res) {
        console.log('It\'s working!');
        const { deviceID } = req.params;
        const comments = await Comment.findAll({
            where: {
                deviceId: deviceID
            },
            include: User
        });
        console.log(comments);
        return res.json(comments);
    }

}

module.exports = new CommentController();