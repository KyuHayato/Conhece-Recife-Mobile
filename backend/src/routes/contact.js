const express = require("express");
const router = express.Router();
const controller = require("../controllers/contact");

router.post("/", controller.postContact);

module.exports = router;
