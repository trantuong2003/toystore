var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
    name:String,
    size: String,
    prices: Number,
    image: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'brands'
    }

})
var ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;

