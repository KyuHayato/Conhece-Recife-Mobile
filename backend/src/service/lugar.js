const lugares = require("../models/lugar");
const categorias = require("../models/categorias");

async function getAll() {
  let response = {};
  try {
    await lugares.find({}).then((data) => {
      response = data;
    });
  } catch (error) {
    throw new Error(error);
  }

  return response;
}

async function getAllWithQueries(temAcessibilidade, categorias) {
  if (temAcessibilidade && categorias) {
    try {
      await lugares
        .find({ categorias: categorias, acessibilidade: temAcessibilidade })
        .then((data) => {
          response = data;
        });
    } catch (error) {
      throw new Error(error);
    }
  }
  if (categorias) {
    try {
      await lugares.find({ categorias: categorias }).then((data) => {
        response = data;
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  try {
    await lugares.find({ acessibilidade: temAcessibilidade }).then((data) => {
      response = data;
    });
  } catch (error) {
    throw new Error(error);
  }
}

async function getAllCategories() {
  let response = undefined;
  try {
    await categorias.find().then((data) => {
      response = data;
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function getLugarById(id) {
  let response = undefined;
  try {
    await lugares.find({ id }).then((data) => {
      response = data;
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function postCategoria(payload) {
  let response = undefined;
  try {
    await categorias(payload)
      .save()
      .then((data) => {
        response = data;
      });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function postLugar(payload) {
  let response = undefined;
  try {
    await lugares(payload)
      .save()
      .then((data) => {
        response = data;
      });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getAll,
  getAllCategories,
  getLugarById,
  getAllWithQueries,
  postCategoria,
  postLugar,
};
