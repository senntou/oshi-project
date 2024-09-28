import express from "express";
import { client } from "../app";
const router = express.Router();

const query = `SELECT * FROM actor`;
router.get("/", function (req, res, next) {
  client.query(query, (err: Error, result: { rows: any[] }) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.render("actors", { actors: result.rows });
    }
  });
});

export default router;
