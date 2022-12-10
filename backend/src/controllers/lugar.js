const lugares = require("../models/lugar");
const { v4: uuidv4 } = require("uuid");
const lugarService = require("../service/lugar");

const getAll = async (req, res) => {
  let response = {};
  if (Object.keys(req.query).length != 0) {
    const { temAcessibilidade } = req.query;
    const { categorias } = req.query;
    try {
      response = await lugarService.getAllWithQueries(
        temAcessibilidade,
        categorias
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

const deleteLugares = (req, res) => {
  const { id } = req.params;

  try {
    lugares.find({ id }, function (err, lugares) {
      if (lugares.length > 0) {
        lugares.deleteMany({ id }, function (err) {
          if (!err) {
            res.status(200).send({
              message: "Local removido com sucesso",
              status: "SUCCESS",
            });
          }
        });
      } else
        res
          .status(200)
          .send({ message: "Não há local para ser removido", status: "EMPTY" });
    });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .send({ message: "Erro ao deletar o registro do local" });
  }
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
