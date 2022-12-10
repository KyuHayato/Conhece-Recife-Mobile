const mongoose = require("mongoose");

const categoriasSchemas = new mongoose.Schema({
  id: { type: String, required: true },
  categoria: { type: String, required: true },
});

const categoriasMongo = mongoose.model("categorias", categoriasSchemas);

module.exports = categoriasMongo;
