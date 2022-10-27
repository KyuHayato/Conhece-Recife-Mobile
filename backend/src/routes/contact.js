const express = require("express");
const router = express.Router();

const path = require("./path/contact");
const controller = require("../controllers/contact");

router.post(path.postContact, controller.postContact);

module.exports = router;
