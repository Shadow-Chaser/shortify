const ShortURL = require("../models/shortURL.model");

const shortenURL = async (req, res) => {
  const result = await ShortURL.findOne({ fullURL: req.body.fullURL });
  if (result)
    return res.status(201).send({
      fullURL: result.fullURL,
      shortURL: process.env.BASE_URL + result.shortID,
    });

  const shortURL = new ShortURL({ fullURL: req.body.fullURL });

  try {
    const { fullURL, shortID } = await shortURL.save();
    return res
      .status(201)
      .send({ fullURL, shortURL: process.env.BASE_URL + shortID });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getFullURL = async (req, res) => {
  const shortURLSplitted = req.body.shortURL.split("/");
  const shortID = shortURLSplitted[shortURLSplitted.length - 1];
  try {
    const result = await ShortURL.findOne({ shortID: shortID });

    if (result === null) return res.status(404).json("Not Found!");

    return res.status(201).send({
      fullURL: result.fullURL,
      shortURL: process.env.BASE_URL + result.shortID,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const redirectShortURL = async (req, res) => {
  try {
    const result = await ShortURL.findOne({ shortID: req.params.shortID });
    if (result === null) return res.status(404).json("Not Found!");
    res.redirect(`${result.fullURL}`);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { shortenURL, getFullURL, redirectShortURL };
