import { Request, Response, NextFunction } from "express";
import { getTheNextMoves } from "../component/chess"

const getNextMove = async (req: Request, res: Response, next: NextFunction) => {
  const type: string = req.params.type;
  const position: string = req.params.position;
  const nextMoves = getTheNextMoves(type, position)
  return res.status(200).json({
    nextMoves: nextMoves,
  });
};

export default { getNextMove };
