"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chess_1 = require("../component/chess");
const getNextMove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.params.type;
    const position = req.params.position;
    const nextMoves = (0, chess_1.getTheNextMoves)(type, position);
    return res.status(200).json({
        nextMoves: nextMoves,
    });
});
exports.default = { getNextMove };
