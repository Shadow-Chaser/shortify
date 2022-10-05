const express = require("express");
const cors = require("cors");
const compression = require("compression");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(compression());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

require("./routes")(app);

module.exports = app;
