var express = require("express");
var router = express.Router();

// var ProductModel = require("../models/productModels");

var BrandModel = require("../models/BrandModels");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("admin/product/amin", { layout: "layout_admin" });
});

router.get("/brand", async (req, res) => {
  var brand = await BrandModel.find({});
  res.render("admin/brand/index", { brand, layout: "layout_admin" });
});

router.get("/add", (req, res) => {
  res.render("admin/brand/add", { layout: "layout_admin" });
});

router.post("/add", async (req, res) => {
  var brand = req.body;
  await BrandModel.create(brand);
  res.redirect("/admin/brand");
});

module.exports = router;
