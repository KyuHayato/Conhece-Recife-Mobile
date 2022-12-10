const express = require("express");
const router = express.Router();
const controller = require("../controllers/lugar");

router.get("/", controller.getAll);
router.get("/categoria", controller.getAllCategorias);
router.post("/categoria", controller.postCategoria);
router.get("/:id", controller.getLugarById);
router.post("/", controller.postLugares);
router.put("/:id", controller.putLugares);
router.delete("/:id", controller.deleteLugares);

module.exports = router;
