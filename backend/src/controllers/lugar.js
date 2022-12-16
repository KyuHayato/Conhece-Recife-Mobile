const lugares = require("../models/lugar");
const { v4: uuidv4 } = require("uuid");
const lugarService = require("../service/lugar");

const getAll = async (req, res) => {
  let response = {};
  console.log(req.query);
  if (Object.keys(req.query).length != 0) {
    const { temAcessibilidade } = req.query;
    const { categorias } = req.query;

    const filterCategorias = categorias.trim().split(" ");
    try {
      response = await lugarService.getAllWithQueries(
        temAcessibilidade,
        filterCategorias
      );
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  try {
    response = await lugarService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllCategorias = async (req, res) => {
  let response = {};
  try {
    response = await lugarService.getAllCategories();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getLugarById = async (req, res) => {
  let response = {};
  const id = req.params.id;

  try {
    response = await lugarService.getLugarById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* POST */
const postCategoria = async (req, res) => {
  const payload = req.body;
  payload.id = uuidv4();

  try {
    let response = await lugarService.postCategoria(payload);
    res.status(201).json({ message: "Categoria incluida", response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postLugares = async (req, res) => {
  const payload = req.body;
  payload.id = uuidv4();

  try {
    let response = await lugarService.postLugar(payload);
    res.status(201).json({ message: "Lugar incluido", response });
  } catch (error) {
    res.status(500).send(error);
  }
};

/* DELETE */

const deleteLugares = async (req, res) => {
  const { id } = req.params;
  let response = {};

  try {
    response = await lugarService.getLugarById(id);
    if (response) {
      let wasDeleted = lugarService.deleteOne(id);
      return res.status(200).send({ message: wasDeleted });
    }
    return res
      .status(424)
      .send({ message: "Não existe registro para esse ID" });
  } catch (err) {}
};

/* PUT */

const putLugares = (req, res) => {
  const id = req.params.id;
  lugares.updateMany(
    { id },
    { $set: req.body },
    { upsert: true },
    function (err) {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Atualizado com sucesso" });
      }
    }
  );
};

module.exports = {
  getAll,
  postLugares,
  deleteLugares,
  putLugares,
  getLugarById,
  getAllCategorias,
  postCategoria,
};
