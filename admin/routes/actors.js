const express = require("express");
const { client } = require("../app");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const query = "SELECT * FROM actors";
  client
    .query(query)
    .then((result) => {
      const actors = result.rows;
      res.render("actors", { actors });
    })
    .catch((err) => next(err));
});

module.exports = router;
