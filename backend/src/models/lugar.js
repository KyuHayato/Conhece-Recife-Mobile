const mongoose = require("mongoose");

const lugaresSchema = new mongoose.Schema({
  id: { type: String, required: true },
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  cidade: { type: String, required: true },
  rua: { type: String, required: true },
  estado: { type: String, required: true },
  complemento: { type: String, required: false },
  bairro: { type: String, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  acessibilidade: { type: Boolean, required: true },
  categoria: { type: Array, required: true },
  imageUri: { type: Array, required: true },
});

const lugaresMongo = mongoose.model("lugares", lugaresSchema);

module.exports = lugaresMongo;
