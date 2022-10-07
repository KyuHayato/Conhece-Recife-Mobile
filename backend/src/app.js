require("./database")();

const routeLugares = require("./routes/lugar");

const express = require("express");
const expressApp = express();
const bodyParser = require("body-parser");

expressApp.use(express.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));

expressApp.use((req, res, next) => {
  res.header("Access-control-Allow-Origin", "*");
  res.header(
    "Access-control-Allow-headers",
    "origin, x-Requested-with, content-type, Accept"
  );
  next();
});

expressApp.use("/lugares", routeLugares);

module.exports = { expressApp };
