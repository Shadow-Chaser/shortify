const {
  shortenURL,
  getFullURL,
  redirectShortURL,
} = require("../controllers/shortURL.controller");

const router = require("express").Router();

router.route("/shortUrl").post(shortenURL);
router.route("/fullUrl").post(getFullURL);
router.route("/:shortID").get(redirectShortURL);

module.exports = router;
