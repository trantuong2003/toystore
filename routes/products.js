var express = require("express");
var router = express.Router();

var ProductModel = require("../models/ProductModels");
var CategoryModel = require("../models/CategoryModels");
var BrandModel = require("../models/BrandModels");

router.get("/", async (req, res) => {
  var product = await ProductModel.find({}).populate("category").populate("brand");
  res.render("admin/product/index", { product, layout: "layout_admin" });
});

router.get("/add", async (req,res)=> {
  var category = await CategoryModel.find({});
  var brand = await BrandModel.find({});
  res.render("admin/product/add" ,{category, brand, layout: "layout_admin"});
});

router.post("/add", async (req, res)=>{
  var product = req.body;
  await ProductModel.create(product);
  res.redirect("/product")
});

router.get("/delete/:id", async (req, res)=>{
  var product = req.params.id;
  try{
    await ProductModel.findByIdAndDelete(product);
    console.log("Delete success");
  }catch (err) {
    console.error("Delete fail" + err);
  }
res.redirect("/product");
});


router.get("/edit/:id",async (req, res)=>{
  var id = req.params.id;
  var products = await ProductModel.findById(id);
  var categori = await CategoryModel.find({});
  res.render("admin/product/edit",{products, categori, layout: "layout_admin"});
})

router.post("/edit/:id", async(req, res)=>{
  var id = req.params.id;
  var produc = req.body;
  try{
    await ProductModel.findByIdAndUpdate(id, produc);
    console.log("Update success");
  }catch (err){
    console.error("update fail");
  }
  res.redirect("/product");
})


router.get('/sort/asc', async (req, res) => {
  //SQL: SELECT * FROM mobiles ORDER BY model
  var product = await ProductModel.find().populate("category").sort({ name: 1 });
  res.render('admin/product/index', { product, layout: "layout_admin" });
})

router.get('/sort/desc', async (req, res) => {
  //SQL: SELECT * FROM mobiles ORDER BY model DESC
  var product = await ProductModel.find().populate("category").sort({ name: -1 });
  res.render('admin/product/index', { product, layout: "layout_admin" });
})

router.post('/search', async (req, res) => {
  var keyword = req.body.keyword;
  //SQL: SELECT * FROM mobiles WHERE model LIKE '%keyword%'
  var product = await ProductModel.find({ name: new RegExp(keyword, "i") }).populate("category");
  res.render('admin/product/index', { product, layout: "layout_admin" });
})





module.exports = router;
