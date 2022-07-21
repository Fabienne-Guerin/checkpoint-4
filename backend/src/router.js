const express = require("express");

<<<<<<< HEAD
const {
  ItemController,
  CategoryController,
  ProductController,
} = require("./controllers");
=======
const { ItemController } = require("./controllers");
>>>>>>> 276bb4f869d97f4126c36e4952e29ee6ae008c1f

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
