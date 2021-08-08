const ApiError = require('../error/APIError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

const generate_gwt = (id, email, username, role) => {
    return jwt.sign({id: id, email, username, role}, process.env.SECRET_KEY, {expiresIn: '24h'});
}

class UserController {
    async registration(req, res, next) {
        const {email, password, username, role} = req.body;
        if (!email || !password || !username) {
            next(ApiError.badRequest('Incorrect email or password'));
        }

        const candidate = await User.findOne({where: {password}});
        if (candidate) {
            return next(ApiError.badRequest('There is such user'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, username, password: hashPassword});
        const basket = await Basket.create({userId: user.id});
        const token = generate_gwt(user.id, user.email, user.username, user.role);

        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal('There is no such user'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Incorrect password!'));
        }

        const token = generate_gwt(user.id, user.email, user.username, user.role);
        return res.json({token});
    }

    async check(req, res, next) {
        /*
        const query = req.query; //?tagId=5

        if (!query.id) {
            return next(ApiError.badRequest('No ID!'));
        }

        res.json(query);
        */
        const token = generate_gwt(req.user.id, req.user.email, req.user.username, req.user.role);
        return res.json({token});
    }
}

module.exports = new UserController();