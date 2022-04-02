const itemModel = require('../models/itemModel');


module.exports.getProducts = async(req, res, next) => {
    try {
        //const items = await itemModel.find({}).exec();
        res.status(200).json(items);
    } catch (err) {
        next(err);
    }
}

module.exports.getProductById = async(req, res, next) => {
    try {
        const product = itemModel.findById(req.params.id).exec();
        res.status(200).json(items);
    } catch (err) {
        next(err);
    }
}