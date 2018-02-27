import CellAdjacent from "./CellAdjacent";

export default class CellDimensionAdjacentFactory {
  constructor(numOfCells, indexOfCell) {
    this.adjacent = new CellAdjacent(numOfCells, indexOfCell);
  }

  adjacentsOfTopLeftCorner() {
    return [
      this.adjacent.right(),
      this.adjacent.bottom(),
      this.adjacent.bottomRightDiagonal()
    ];
  }

  adjacentsOfTopRightCorner() {
    return [
      this.adjacent.left(),
      this.adjacent.bottom(),
      this.adjacent.bottomLeftDiagonal()
    ];
  }

  adjacentsOfTopIntermediate() {
    return [
      this.adjacent.left(),
      this.adjacent.right(),
      this.adjacent.bottom(),
      this.adjacent.bottomLeftDiagonal(),
      this.adjacent.bottomRightDiagonal()
    ];
  }

  adjacentsOfBottomLeftCorner() {
    return [
      this.adjacent.right(),
      this.adjacent.top(),
      this.adjacent.topRightDiagonal()
    ];
  }

  adjacentsOfBottomRightCorner() {
    return [
      this.adjacent.left(),
      this.adjacent.top(),
      this.adjacent.topLeftDiagonal()
    ];
  }

  adjacentsOfBottomIntermediate() {
    return [
      this.adjacent.left(),
      this.adjacent.right(),
      this.adjacent.top(),
      this.adjacent.topLeftDiagonal(),
      this.adjacent.topRightDiagonal()
    ];
  }

  adjacentsOfLeftIntermediate() {
    return [
      this.adjacent.right(),
      this.adjacent.top(),
      this.adjacent.bottom(),
      this.adjacent.topRightDiagonal(),
      this.adjacent.bottomRightDiagonal()
    ];
  }

  adjacentsOfRightIntermediate() {
    return [
      this.adjacent.left(),
      this.adjacent.top(),
      this.adjacent.bottom(),
      this.adjacent.topLeftDiagonal(),
      this.adjacent.bottomRightDiagonal()
    ];
  }

  adjacentsOfIntermediate() {
    return [
      this.adjacent.left(),
      this.adjacent.right(),
      this.adjacent.top(),
      this.adjacent.bottom(),
      this.adjacent.topLeftDiagonal(),
      this.adjacent.topRightDiagonal(),
      this.adjacent.bottomLeftDiagonal(),
      this.adjacent.bottomRightDiagonal()
    ];
  }
}
