
var mongoose = require("mongoose");
var BrandSchema = mongoose.Schema({
  name: String,
  

});
var BrandModel = mongoose.model("brands", BrandSchema);
module.exports = BrandModel;
