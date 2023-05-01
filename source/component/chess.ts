const UPPER_ROW_LIMIT = 8;
const LOWER_ROW_LIMIT = 1;

export function getTheNextMoves(type: string, position: string): string[] {
  let upMoves: string[] = [];
  let downMoves: string[] = [];
  let leftMoves: string[] = [];
  let rightMoves: string[] = [];
  let diagonalLeftUpMoves: string[] = [];
  let diagonalLeftDownMoves: string[] = [];
  let diagonalRightUpMoves: string[] = [];
  let diagonalRightDownMoves: string[] = [];
  let totalMoves: string[] = [];
  const chessType = type.toLowerCase();

  if (chessType === "queen") {
    upMoves = getUpMoves(chessType, position);
    downMoves = getDownMoves(chessType, position);
    leftMoves = getLeftMoves(chessType, position);
    rightMoves = getRightMoves(chessType, position);
    diagonalLeftUpMoves = getDiagonalLeftUpMoves(chessType, position);
    diagonalLeftDownMoves = getDiagonalLeftDownMoves(chessType, position);
    diagonalRightUpMoves = getDiagonalRightUpMoves(chessType, position);
    diagonalRightDownMoves = getDiagonalRightDownMoves(chessType, position);
  }
  if (chessType === "king") {
    upMoves = getUpMoves(chessType, position);
    downMoves = getDownMoves(chessType, position);
    leftMoves = getLeftMoves(chessType, position);
    rightMoves = getRightMoves(chessType, position);
    diagonalLeftUpMoves = getDiagonalLeftUpMoves(chessType, position);
    diagonalLeftDownMoves = getDiagonalLeftDownMoves(chessType, position);
    diagonalRightUpMoves = getDiagonalRightUpMoves(chessType, position);
    diagonalRightDownMoves = getDiagonalRightDownMoves(chessType, position);
  }
  if (chessType === "pawn") {
    upMoves = getUpMoves(chessType, position);
  }
  totalMoves = [
    ...upMoves,
    ...downMoves,
    ...leftMoves,
    ...rightMoves,
    ...diagonalLeftUpMoves,
    ...diagonalLeftDownMoves,
    ...diagonalRightUpMoves,
    ...diagonalRightDownMoves,
  ];
  return totalMoves;
}

export function getUpMoves(type: string, position: string): string[] {
  let upMoves: string[] = [];
  const column = position.substring(0, 1).toUpperCase();
  const row = Number(position.substring(1, 2));
  if (type === "queen") {
    for (let i = row; i <= UPPER_ROW_LIMIT; i++) {
      const newPos = column + i;
      upMoves =
        newPos != position.toUpperCase() ? upMoves.concat(column + i) : upMoves;
    }
  }
  if (type === "king") {
    upMoves =
      row < UPPER_ROW_LIMIT ? upMoves.concat(column + (row + 1)) : upMoves;
  }
  if (type === "pawn") {
    upMoves =
      row < UPPER_ROW_LIMIT ? upMoves.concat(column + (row + 1)) : upMoves;
  }
  return upMoves;
}

export function getDownMoves(type: string, position: string): string[] {
  let downMoves: string[] = [];
  const column = position.substring(0, 1).toUpperCase();
  const row = Number(position.substring(1, 2));
  if (type === "queen") {
    for (let i = row; i >= LOWER_ROW_LIMIT; i--) {
      const newPos = column + i;
      downMoves =
        newPos != position.toUpperCase()
          ? downMoves.concat(column + i)
          : downMoves;
    }
  }
  if (type === "king") {
    downMoves =
      row > LOWER_ROW_LIMIT ? downMoves.concat(column + (row - 1)) : downMoves;
  }
  return downMoves;
}

export function getLeftMoves(type: string, position: string): string[] {
  let leftMoves: string[] = [];
  const column = position.substring(0, 1).toUpperCase();
  const row = Number(position.substring(1, 2));
  if (type === "queen") {
    switch (column) {
      case "A":
        leftMoves = [];
        break;
      case "B":
        leftMoves = ["A" + row];
        break;
      case "C":
        leftMoves = ["A" + row, "B" + row];
        break;
      case "D":
        leftMoves = ["A" + row, "B" + row, "C" + row];
        break;
      case "E":
        leftMoves = ["A" + row, "B" + row, "C" + row, "D" + row];
        break;
      case "F":
        leftMoves = ["A" + row, "B" + row, "C" + row, "D" + row, "E" + row];
        break;
      case "G":
        leftMoves = [
          "A" + row,
          "B" + row,
          "C" + row,
          "D" + row,
          "E" + row,
          "F" + row,
        ];
        break;
      case "H":
        leftMoves = [
          "A" + row,
          "B" + row,
          "C" + row,
          "D" + row,
          "E" + row,
          "F" + row,
          "G" + row,
        ];
        break;
      default:
        leftMoves = [];
        break;
    }
  }
  if (type === "king") {
    const previousAlphabet = getPreviousAlphabet(column);
    leftMoves = previousAlphabet
      ? leftMoves.concat(previousAlphabet + row)
      : leftMoves;
  }
  return leftMoves;
}

export function getRightMoves(type: string, position: string): string[] {
  let rightMoves: string[] = [];
  const column = position.substring(0, 1).toUpperCase();
  const row = Number(position.substring(1, 2));
  if (type === "queen") {
    switch (column) {
      case "A":
        rightMoves = [
          "B" + row,
          "C" + row,
          "D" + row,
          "E" + row,
          "F" + row,
          "G" + row,
          "H" + row,
        ];
        break;
      case "B":
        rightMoves = [
          "C" + row,
          "D" + row,
          "E" + row,
          "F" + row,
          "G" + row,
          "H" + row,
        ];
        break;
      case "C":
        rightMoves = ["D" + row, "E" + row, "F" + row, "G" + row, "H" + row];
        break;
      case "D":
        rightMoves = ["E" + row, "F" + row, "G" + row, "H" + row];
        break;
      case "E":
        rightMoves = ["F" + row, "G" + row, "H" + row];
        break;
      case "F":
        rightMoves = ["G" + row, "H" + row];
        break;
      case "G":
        rightMoves = ["H" + row];
        break;
      case "H":
        rightMoves = [];
        break;
      default:
        rightMoves = [];
        break;
    }
  }
  if (type === "king") {
    const nextAlphabet = getNextAlphabet(column);
    rightMoves = nextAlphabet
      ? rightMoves.concat(nextAlphabet + row)
      : rightMoves;
  }
  return rightMoves;
}

export function getDiagonalLeftUpMoves(
  type: string,
  position: string
): string[] {
  let diagonalLeftUpMoves: string[] = [];
  const column = position.substring(0, 1).toUpperCase();
  const row = Number(position.substring(1, 2));
  if (type === "queen") {
    let newColumn = column;
    for (let i = row + 1; i <= UPPER_ROW_LIMIT; i++) {
      const previousAlphabet = getPreviousAlphabet(newColumn);
      if (!previousAlphabet) {
        break;
      }
      const newPos = previousAlphabet + i;
      newColumn = previousAlphabet;
      diagonalLeftUpMoves =
        newPos != position.toUpperCase()
          ? diagonalLeftUpMoves.concat(newColumn + i)
          : diagonalLeftUpMoves;
    }
  }
  if (type === "king") {
    const previousAlphabet = getPreviousAlphabet(column);
    diagonalLeftUpMoves =
      row < UPPER_ROW_LIMIT && previousAlphabet
        ? diagonalLeftUpMoves.concat(previousAlphabet + (row + 1))
        : diagonalLeftUpMoves;
  }
  return diagonalLeftUpMoves;
}

export function getDiagonalLeftDownMoves(
  type: string,
  position: string
): string[] {
  let diagonalLeftDownMoves: string[] = [];
  const column = position.substring(0, 1).toUpperCase();
  const row = Number(position.substring(1, 2));
  if (type === "queen") {
    let newColumn = column;
    for (let i = row - 1; i >= LOWER_ROW_LIMIT; i--) {
      const previousAlphabet = getPreviousAlphabet(newColumn);
      if (!previousAlphabet) {
        break;
      }
      const newPos = previousAlphabet + i;
      newColumn = previousAlphabet;
      diagonalLeftDownMoves =
        newPos != position.toUpperCase()
          ? diagonalLeftDownMoves.concat(newColumn + i)
          : diagonalLeftDownMoves;
    }
  }
  if (type === "king") {
    const previousAlphabet = getPreviousAlphabet(column);
    diagonalLeftDownMoves =
      row > LOWER_ROW_LIMIT && previousAlphabet
        ? diagonalLeftDownMoves.concat(previousAlphabet + (row - 1))
        : diagonalLeftDownMoves;
  }
  return diagonalLeftDownMoves;
}

export function getDiagonalRightUpMoves(
  type: string,
  position: string
): string[] {
  let diagonalRightUpMoves: string[] = [];
  const column = position.substring(0, 1).toUpperCase();
  const row = Number(position.substring(1, 2));
  if (type === "queen") {
    let newColumn = column;
    for (let i = row + 1; i <= UPPER_ROW_LIMIT; i++) {
      const nextAlphabet = getNextAlphabet(newColumn);
      if (!nextAlphabet) {
        break;
      }
      const newPos = nextAlphabet + i;
      newColumn = nextAlphabet;
      diagonalRightUpMoves =
        newPos != position.toUpperCase()
          ? diagonalRightUpMoves.concat(newColumn + i)
          : diagonalRightUpMoves;
    }
  }
  if (type === "king") {
    const nextAlphabet = getNextAlphabet(column);
    diagonalRightUpMoves =
      row < UPPER_ROW_LIMIT && nextAlphabet
        ? diagonalRightUpMoves.concat(nextAlphabet + (row + 1))
        : diagonalRightUpMoves;
  }
  return diagonalRightUpMoves;
}

export function getDiagonalRightDownMoves(
  type: string,
  position: string
): string[] {
  let diagonalRightDownMoves: string[] = [];
  const column = position.substring(0, 1).toUpperCase();
  const row = Number(position.substring(1, 2));
  if (type === "queen") {
    let newColumn = column;
    for (let i = row - 1; i >= LOWER_ROW_LIMIT; i--) {
      const previousAlphabet = getNextAlphabet(newColumn);
      if (!previousAlphabet) {
        break;
      }
      const newPos = previousAlphabet + i;
      newColumn = previousAlphabet;
      diagonalRightDownMoves =
        newPos != position.toUpperCase()
          ? diagonalRightDownMoves.concat(newColumn + i)
          : diagonalRightDownMoves;
    }
  }
  if (type === "king") {
    const nextAlphabet = getNextAlphabet(column);
    diagonalRightDownMoves =
      row > LOWER_ROW_LIMIT && nextAlphabet
        ? diagonalRightDownMoves.concat(nextAlphabet + (row - 1))
        : diagonalRightDownMoves;
  }
  return diagonalRightDownMoves;
}

export function getPreviousAlphabet(alphabet: string): string | undefined {
  let previousAlphabet;
  switch (alphabet) {
    case "A":
      previousAlphabet = undefined;
      break;
    case "B":
      previousAlphabet = "A";
      break;
    case "C":
      previousAlphabet = "B";
      break;
    case "D":
      previousAlphabet = "C";
      break;
    case "E":
      previousAlphabet = "D";
      break;
    case "F":
      previousAlphabet = "E";
      break;
    case "G":
      previousAlphabet = "F";
      break;
    case "H":
      previousAlphabet = "G";
      break;
    default:
      undefined;
  }
  return previousAlphabet;
}

export function getNextAlphabet(alphabet: string): string | undefined {
  let nextAlphabet;
  switch (alphabet) {
    case "A":
      nextAlphabet = "B";
      break;
    case "B":
      nextAlphabet = "C";
      break;
    case "C":
      nextAlphabet = "D";
      break;
    case "D":
      nextAlphabet = "E";
      break;
    case "E":
      nextAlphabet = "F";
      break;
    case "F":
      nextAlphabet = "G";
      break;
    case "G":
      nextAlphabet = "H";
      break;
    case "H":
      nextAlphabet = undefined;
      break;
    default:
      undefined;
  }
  return nextAlphabet;
}
