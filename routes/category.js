var express = require("express");
var router = express.Router();
var CategoryModel = require("../models/CategoryModels");

/* GET users listing. */
router.get("/", async (req, res) => {
  var category = await CategoryModel.find({});
  res.render("admin/category/index", { category, layout: "layout_admin" });
});


router.get("/add", (req, res) => {
  res.render("admin/category/add", { layout: "layout_admin.hbs" });
});

router.post("/add", async (req, res) => {
  var category = req.body;
  await CategoryModel.create(category);
  res.redirect("/category");
});

router.get("/delete/:id", async (req, res) => {
  var id = req.params.id;
  try {
    await CategoryModel.findByIdAndDelete(id);
    console.log("Delete oke");
  } catch (err) {
    console.log("Delete fail" + err);
  }
  res.redirect("/category");
});


router.get("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var cate = await CategoryModel.findById(id);
  res.render("admin/category/edit", { cate, layout: "layout_admin" });
});

router.get("/test", (req, res) => {
  res.render("admin/category/test", { layout: "layout_admin" });
});

router.post("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var cate = req.body;
  try {
    await CategoryModel.findByIdAndUpdate(id, cate);
    console.log("Update success");
  } catch (err) {
    console.error("update fail" + err);
  }
  res.redirect("/category");
});
module.exports = router;
