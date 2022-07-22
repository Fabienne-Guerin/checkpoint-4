const express = require("express");

const {
  ItemController,
  CategoryController,
  ProductController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/categories", CategoryController.browse);
router.get("/category/:id", CategoryController.read);
router.put("/category/:id", CategoryController.edit);
router.post("/category", CategoryController.add);
router.delete("/category/:id", CategoryController.delete);

router.get("/products", ProductController.browse);
router.get("/products/:id", ProductController.read);
router.put("/product/:id", ProductController.edit);
router.post("/createproduct", ProductController.add);
router.delete("/product/:id", ProductController.delete);

module.exports = router;
