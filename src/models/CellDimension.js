import CellDimensionPolicy from './CellDimentionPolicy';

export default class CellDimension {
  constructor(numOfCells, indexOfCell) {
    this.policy = new CellDimensionPolicy(numOfCells, indexOfCell);
    this.indexOfCell = indexOfCell;
    this.baseNumber = Math.sqrt(numOfCells);
  }

  adjacents() {
    if (this.policy.isTopLeftCorner()) {
      return this.adjacentsOfTopLeftCorner();
    }

    if (this.policy.isTopRightCorner()) {
      return this.adjacentsOfTopRightCorner();
    }

    if (this.policy.isTopIntermediateCross()) {
      return this.adjacentsOfTopIntermediate();
    }

    if (this.policy.isBottomLeftCorner()) {
      return this.adjacentsOfBottomLeftCorner();
    }

    if (this.policy.isBottomRightCorner()) {
      return this.adjacentsOfBottomRightCorner();
    }

    if (this.policy.isBottomIntermediateCross()) {
      return this.adjacentsOfBottomIntermediate();
    }

    if (this.policy.isLeftIntermediateVertical()) {
      return this.adjacentsOfLeftIntermediate();
    }

    if (this.policy.isRightIntermediateVertical()) {
      return this.adjacentsOfRightIntermediate();
    }

    if (this.policy.isIntermediate()) {
      return this.adjacentsOfIntermediate();
    }

    return [];
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

  adjacentsOfTopLeftCorner() {
    return [this.right(), this.bottom(), this.bottomRightDiagonal()];
  }

  adjacentsOfTopRightCorner() {
    return [this.left(), this.bottom(), this.bottomLeftDiagonal()];
  }

  adjacentsOfTopIntermediate() {
    return [this.left(), this.right(), this.bottom(), this.bottomLeftDiagonal(), this.bottomRightDiagonal()];
  }

  adjacentsOfBottomLeftCorner() {
    return [this.right(), this.top(), this.topRightDiagonal()];
  }

  adjacentsOfBottomRightCorner() {
    return [this.left(), this.top(), this.topLeftDiagonal()];
  }

  adjacentsOfBottomIntermediate() {
    return [this.left(), this.right(), this.top(), this.topLeftDiagonal(), this.topRightDiagonal()];
  }

  adjacentsOfLeftIntermediate() {
    return [this.right(), this.top(), this.bottom(), this.topRightDiagonal(), this.bottomRightDiagonal()];
  }

  adjacentsOfRightIntermediate() {
    return [this.left(), this.top(), this.bottom(), this.topLeftDiagonal(), this.bottomRightDiagonal()];
  }


  adjacentsOfIntermediate() {
    return [this.left(), this.right(), this.top(), this.bottom(), this.topLeftDiagonal(), this.topRightDiagonal(), this.bottomLeftDiagonal(), this.bottomRightDiagonal()]
  }
}
