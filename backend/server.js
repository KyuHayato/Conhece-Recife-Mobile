const { expressApp } = require("./src/app");

try {
  expressApp.listen(process.env.PORT, () => {
    console.log(`Listening on PORT : ${process.env.PORT}!`);
  });
} catch (err) {
  console.error(err);
}
