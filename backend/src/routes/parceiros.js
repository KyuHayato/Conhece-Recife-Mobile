const express = require("express");
const router = express.Router();
const path = require("./path/parceiros");

const controller = require("../controllers/parceiros");

router.get(path.getAll, controller.getAll);
router.get(path.getCupom, controller.getCupom);
router.get(path.getByBairro, controller.getByBairro);

router.put(path.putParceiros, controller.putParceiros);

router.post(path.postParceiros, controller.postParceiros);

router.delete(path.deleteParceiros, controller.deleteParceiros);

module.exports = router;
