const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    articleName: { type: String, required: true },
    typeName: { type: String, required: true },
    price: { type: Number, required: true },
    numberOfItems: { type: Number, required: true },
    description: { type: String }
});


module.exports = mongoose.model('items', Item);