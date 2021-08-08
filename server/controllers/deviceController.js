const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo, Type, Brand} = require('../models/models');
const APIError = require('../error/APIError');

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let filename = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', filename));

            const device = await Device.create({name, price, brandId, typeId, img: filename});
            
            if (info) {
                info = JSON.parse(info);
                info.forEach(element => {
                    DeviceInfo.create({
                        title: element.title,
                        description: element.description,
                        deviceId: device.id
                    })
                });
            }

            return res.json(device);
        } catch(err) {
            next(APIError.badRequest(err.message));
        }
        
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = limit * (page - 1);

        let devices;
        if (!brandId && !typeId) {
            //devices = await Device.findAll({limit, offset});
            devices = await Device.findAndCountAll({limit, offset,
                include: {model: Brand, as: 'brand'}}); // for pagination
        }
        if (!brandId && typeId) {
            //devices = await Device.findAll({where: {typeId}, limit, offset});
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset, include: {model: Brand, as: 'brand'}});
        }
        if (brandId && !typeId) {
            //devices = await Device.findAll({where: {brandId}, limit, offset});
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset, include: {model: Brand, as: 'brand'}});
        }
        if (brandId && typeId) {
            //devices = await Device.findAll({where: {typeId, brandId}, limit, offset});
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset, include: {model: Brand, as: 'brand'}});
        }

        return res.json(devices);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        });
        return res.json(device);
    }

    async like(req, res, next) {
        try {
            let {id, rating} = req.body;

            let device = await Device.findOne({
                where: {id}
            });

            let new_rating = (rating + device.rating) / 2;

            device = await Device.update({rating: new_rating},
                { where: { id: id } });

            return res.json(device);
        } catch(err) {
            next(APIError.badRequest(err.message));
        }
    }
}

module.exports = new DeviceController();