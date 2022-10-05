const shortURLRouter = require("./shortURL.route");

module.exports = (app) => {
  app.use("/", shortURLRouter);
};
