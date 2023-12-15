var express = require("express");
var router = express.Router();

// var ProductModel = require("../models/productModels");


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("admin/product/amin", { layout: "layout_admin" });
});

// router.get("/product", async (req, res) => {
//   var product = await ProductModel.find({}).populate("category");
//   res.render("admin/product/index", { product, layout: "layout_admin" });
// });



module.exports = router;
