export default class CellDimension {
  constructor(numOfCells, indexOfCell) {
    this.numOfCells = numOfCells;
    this.cellNumber = indexOfCell + 1;
  }

  isLeftEnd() {
    let baseNumber = Math.sqrt(this.numOfCells)
    let modComputeCellPosition =  (this.cellNumber - 1) % baseNumber;
    return this.cellNumber === 1 || modComputeCellPosition === 0
  }

  isRightEnd() {
    let baseNumber = Math.sqrt(this.numOfCells)
    let modComputeCellPosition =  this.cellNumber % baseNumber
    return modComputeCellPosition === 0
  }

  isTopEnd() {
    return Math.sqrt(this.numOfCells) >= this.cellNumber
  }

  isBottomEnd() {
    let cellPostisionComputedBottom = this.numOfCells - Math.sqrt(this.numOfCells)
    return this.cellNumber >= cellPostisionComputedBottom
  }

  isTopLeftCorner() {
    return this.isTopEnd() && this.isLeftEnd();
  }

  isBottomLeftCorner() {
    return this.isBottomEnd() && this.isLeftEnd();
  }

  isTopRightCorner() {
    return this.isTopEnd() && this.isRightEnd();
  }

  isBottomRightCorner() {
    return this.isBottomEnd() && this.isRightEnd();
  }

  isTopIntermediateCross() {
    return this.isTopEnd() && this.isIntermediateCross()
  }

  isBottomIntermediateCross() {
    return this.isBottomEnd() && this.isIntermediateCross()
  }

  isLeftIntermediateVertical() {
    return this.isTopEnd() && this.isIntermediateVertical()
  }

  isRightIntermediateVertical() {
    return this.isBottomEnd() && this.isIntermediateVertical()
  }

  isIntermediate() {
    return this.isIntermediateCross() && this.isIntermediateVertical();
  }

  isIntermediateVertical() {
    return !this.isTopEnd() && !this.isBottomEnd();
  }

  isIntermediateCross() {
    return !this.isRightEnd() && !this.isLeftEnd();
  }
}
