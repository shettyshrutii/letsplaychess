import express from "express";
import controller from "../controller/chesscontroller";
const router = express.Router();

router.get(
  "/chess/movement/type/:type/position/:position",
  controller.getNextMove
);

export = router;
