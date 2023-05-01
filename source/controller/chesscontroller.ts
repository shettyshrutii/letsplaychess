import { Request, Response, NextFunction } from "express";
import { getTheNextMoves } from "../component/chess";

const getNextMove = async (req: Request, res: Response, next: NextFunction) => {
  const type: string = req.params.type;
  const position: string = req.params.position;
  const column = position.substring(0, 1).toUpperCase();
  const row = Number(position.substring(1, 2));
  const nextMoves = getTheNextMoves(type, position);
  if (!['pawn', 'king', 'queen'].includes(type.toLowerCase()) ) {
    return res.status(400).json({
      error: `Unsupported chess type ${type}`,
    });
  }
  if (isNaN(row)) {
    return res.status(400).json({
      error: `Unsupported chess position ${position}`,
    });
  }
  if (!['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].includes(column.toUpperCase())) {
    return res.status(400).json({
      error: `Unsupported chess position ${position}`,
    });
  }
  return res.status(200).json({
  nextMoves: nextMoves,
});
};

export default { getNextMove };
