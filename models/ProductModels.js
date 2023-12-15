var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
    name:String,
    size: String,
    prices: String,
    image: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'categories'
    }

})
var ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;