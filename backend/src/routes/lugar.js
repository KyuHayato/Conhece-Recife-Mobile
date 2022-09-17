const express = require("express");
const router = express.Router();

const path = require("./path/lugar");
const controller = require("../controllers/lugar");

router.get(path.getAll, controller.getAll);
router.get(path.byId, controller.getById);
router.get(path.getAccessibilidade, controller.getByAcessibilidade);

router.put(path.byId, controller.putLugares);

router.post(path.postLugares, controller.postLugares);

router.delete(path.byId, controller.deleteLugares);

module.exports = router;
