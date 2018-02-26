import CellDimensionPolicy from './CellDimentionPolicy';
import CellDimensionAdjacentFactory from './CellDimentionAdjacentFactory';

export default class CellDimension {
  constructor(numOfCells, indexOfCell) {
    this.policy = new CellDimensionPolicy(numOfCells, indexOfCell);
    this.factory = new CellDimensionAdjacentFactory(numOfCells, indexOfCell);
  }

  adjacents() {
    if (this.policy.isTopLeftCorner()) {
      return this.factory.adjacentsOfTopLeftCorner();
    }

    if (this.policy.isTopRightCorner()) {
      return this.factory.adjacentsOfTopRightCorner();
    }

    if (this.policy.isTopIntermediateCross()) {
      return this.factory.adjacentsOfTopIntermediate();
    }

    if (this.policy.isBottomLeftCorner()) {
      return this.factory.adjacentsOfBottomLeftCorner();
    }

    if (this.policy.isBottomRightCorner()) {
      return this.factory.adjacentsOfBottomRightCorner();
    }

    if (this.policy.isBottomIntermediateCross()) {
      return this.factory.adjacentsOfBottomIntermediate();
    }

    if (this.policy.isLeftIntermediateVertical()) {
      return this.factory.adjacentsOfLeftIntermediate();
    }

    if (this.policy.isRightIntermediateVertical()) {
      return this.factory.adjacentsOfRightIntermediate();
    }

    if (this.policy.isIntermediate()) {
      return this.factory.adjacentsOfIntermediate();
    }

    return [];
  }
}
