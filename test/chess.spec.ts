import { assert } from "chai";
import { getTheNextMoves } from "../source/component/chess";

describe("Get the next movements", () => {
    it("should 1 movement for pawn at positinon E4", () => {
        const result = getTheNextMoves('pawn', 'E4');
        assert.deepEqual([ 'E5' ], result);
    });
    it("should 1 movement for pawn at position F7", () => {
        const result = getTheNextMoves('pawn', 'F7');
        assert.deepEqual([ 'F8' ], result);
    });
    it("should 0 movement for pawn at position F8", () => {
        const result = getTheNextMoves('pawn', 'F8');
        assert.deepEqual([], result);
    });
    
    it("should 8 movements for king at positinon E4", () => {
        const result = getTheNextMoves('king', 'E4');
        assert.deepEqual([ 'E5', 'E3', 'D4', 'F4', 'D5', 'D3', 'F5', 'F3' ], result);
    });
    it("should 5 movements for king at position G1", () => {
        const result = getTheNextMoves('king', 'G1');
        assert.deepEqual([ 'G2', 'F1', 'H1', 'F2', 'H2' ], result);
    });
    it("should 3 movements for king at position H1", () => {
        const result = getTheNextMoves('king', 'H1');
        assert.deepEqual([ 'H2', 'G1', 'G2' ], result);
    });

    it("should all movements for queen at positinon E4", () => {
        const result = getTheNextMoves('queen', 'E4');
        assert.deepEqual([ 'E5', 'E6', 'E7', 'E8', 'E3', 'E2', 'E1', 'A4', 'B4', 'C4', 'D4', 'F4', 'G4', 'H4', 'D5',
        'C6', 'B7', 'A8', 'D3', 'C2', 'B1', 'F5', 'G6', 'H7', 'F3', 'G2', 'H1' ], result);
    });
});