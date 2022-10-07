const express = require("express");
const router = express.Router();

const path = require("./path/lugar");
const controller = require("../controllers/lugar");

router.get(path.getAll, controller.getAll);
router.post(path.postLugares, controller.postLugares);
router.get(path.byId, controller.getById);
router.put(path.byId, controller.putLugares);
router.delete(path.byId, controller.deleteLugares);
router.get(path.getAccessibilidade, controller.getByAcessibilidade);


module.exports = router;
