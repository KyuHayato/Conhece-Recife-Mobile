const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose
      .connect(process.env.MONGO_CONNECTION, {
        useNewUrlParser: true,
      })
      .then((result) => {
        console.log("Sucesso ao conectar ao MongoDB : ");
      })
      .catch((err) => {
        console.error("Erro ao conectar no Mongo : ", err);
      });
  } catch (err) {
    console.error(err);
  }
};
