const { Schema, model } = require("mongoose");
const shortid = require("shortid");

const shortUrlSchema = Schema({
  fullURL: {
    type: String,
    required: true,
  },
  shortID: {
    type: String,
    // required: true,
    unique: true,
    default: shortid.generate(),
  },
});

module.exports = model("ShortURL", shortUrlSchema);
