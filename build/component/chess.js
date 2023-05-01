"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UPPER_ROW_LIMIT = 8;
;
function getUpMoves(type, position) {
    let upMoves = [];
    const column = position.substring(0, 1);
    const row = Number(position.substring(0, 2));
    if (type === "queen") {
        for (let i = row; i <= UPPER_ROW_LIMIT; i++) {
            upMoves = upMoves.concat(column + i.toString);
        }
    }
    return upMoves;
}
