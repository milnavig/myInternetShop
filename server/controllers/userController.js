const ApiError = require('../error/APIError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket, Token} = require('../models/models');
const uuid = require('uuid');
const mailService = require('../service/mail-service');
const { validationResult } = require('express-validator');

const generate_gwt = (id, email, username, role) => {
    const access_token = jwt.sign({id: id, email, username, role}, process.env.SECRET_KEY, {expiresIn: '30m'});
    const refresh_token = jwt.sign({id: id, email, username, role}, process.env.REFRESH_SECRET_KEY, {expiresIn: '24h'});
    return {access_token, refresh_token}
}

async function saveToken(userId, refresh_token) {
    const tokenData = await Token.findOne({where: {userId}});
    if (tokenData) {
        tokenData.refreshToken = refresh_token;
        return tokenData.save();
    }
    const token = await Token.create({userId, refreshToken: refresh_token});
    return token;
}

class UserController {
    async registration(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(ApiError.badRequest('Invalid data in the inputs'));
        }

        const {email, password, username, role} = req.body;
        if (!email || !password || !username) {
            next(ApiError.badRequest('Incorrect email or password'));
        }

        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('There is such user'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const activationLink = uuid.v4();
        const user = await User.create({email, role, username, password: hashPassword, activationLink});
        const basket = await Basket.create({userId: user.id});

        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const token = generate_gwt(user.id, user.email, user.username, user.role);
        const access_token = token.access_token;
        const refresh_token = token.refresh_token;
        await saveToken(user.id, refresh_token);
        res.cookie('refreshToken', refresh_token, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

        return res.json({access_token, refresh_token});
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
        const access_token = token.access_token;
        const refresh_token = token.refresh_token;
        await saveToken(user.id, refresh_token);
        res.cookie('refreshToken', refresh_token, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

        return res.json({access_token, refresh_token});
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
        return res.json({...token});
    }

    async logout(req, res, next) { 
        try {
            const { refreshToken } = req.cookies;
            const token = Token.destroy({
                where: {
                    refreshToken
                }
            });
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            const user = await User.findOne({where: {activationLink}});
            if (!user) {
                throw ApiError.badRequest('Incorrect activation link');
            }
            user.isActivated = true;
            await user.save();
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;

            if (!refreshToken) {
                throw ApiError.unauthorized('No token');
            }
            const userData = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);

            const tokenFromDB = Token.findOne({
                where: {
                    refreshToken
                }
            });

            if (!userData || !tokenFromDB) {
                throw ApiError.unauthorized('User is not authorized');
            }

            const user = await User.findOne({where: {id: userData.id}});
            const token = generate_gwt(user.id, user.email, user.username, user.role);
            const access_token = token.access_token;
            const refresh_token = token.refresh_token;
            await saveToken(user.id, refresh_token);
            res.cookie('refreshToken', refresh_token, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

            return res.json({access_token, refresh_token});
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();