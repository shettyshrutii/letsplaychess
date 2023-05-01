"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const chesscontroller_1 = __importDefault(require("../controller/chesscontroller"));
const router = express_1.default.Router();
router.get("/chess/movement/type/:type/position/:position", chesscontroller_1.default.getNextMove);
module.exports = router;
