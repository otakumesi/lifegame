export default class CellAdjacent {
  constructor(numOfCells, indexOfCell) {
    this.indexOfCell = indexOfCell;
    this.baseNumber = Math.sqrt(numOfCells);
  }

  left() {
    return this.indexOfCell - 1;
  }

  right() {
    return this.indexOfCell + 1;
  }

  top() {
    return this.indexOfCell - this.baseNumber;
  }

  bottom() {
    return this.indexOfCell + this.baseNumber;
  }

  topLeftDiagonal() {
    return this.top() - 1;
  }

  topRightDiagonal() {
    return this.top() + 1;
  }

  bottomLeftDiagonal() {
    return this.bottom() - 1;
  }

  bottomRightDiagonal() {
    return this.bottom() + 1;
  }
}
