var express = require('express');
var router = express.Router();

var ProductModel = require("../models/ProductModels");
var CategoryModel = require("../models/CategoryModels");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('user/home');
// });


router.get('/', async function(req, res, next) {
  var category = await CategoryModel.find();
  var product = await ProductModel.find();
  res.render('user/home', {category, product});
});

module.exports = router;
