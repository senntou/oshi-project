import express from "express";
import { ModuleResolutionKind } from "typescript";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

export default router;
