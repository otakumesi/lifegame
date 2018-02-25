import {
  START_GAME,
  RENDER_NEXT_FIELD,
  PRODUCE_CELL,
  KILL_CELL
} from "../actions/FieldActionCreators";
import uuidv1 from 'uuid/v1';
import CellDimension from '../models/CellDimension';
import cloneDeep from 'lodash.clonedeep';

const initialState = {
  isStarted: false,
  cells: buildCellPaths(
    Array(20 ** 2)
    .fill(0)
    .map(() => {
      return {key: uuidv1(), isExist: false, adjacents: []}
    })
  )
};

export default function field(state = initialState, action) {
  let newState = cloneDeep(state);
  let cells = newState.cells;
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        isStarted: action.value
      }
    case PRODUCE_CELL:
      cells[action.index].isExist = true;
      return {
        ...state,
        cells
      };
    case KILL_CELL:
      cells[action.index].isExist = false
      return {
        ...state,
        cells
      };
    case RENDER_NEXT_FIELD:
      return {
        ...state,
        cells: buildCellPaths(action.value)
      }
    default:
      return state;
  }
}

function buildCellPaths(cells = []) {
  return cells.map((cell, index) => {
    let adjacents = []
    let dim = new CellDimension(cells.length, index);
    if (dim.isLeftEnd()) {
      adjacents.push(cells[index + 1]);
    }
    if (dim.isRightEnd()) {
      adjacents.push(cells[index - 1]);
    }
    if (dim.isIntermediateCross()) {
      adjacents.push(cells[index + 1]);
      adjacents.push(cells[index - 1]);
    }

    let rootCellLength = Math.sqrt(cells.length)

    if (dim.isTopEnd()) {
      adjacents.push(cells[rootCellLength + index]);
    }
    if (dim.isBottomEnd()) {
      adjacents.push(cells[index - rootCellLength]);
    }

    let baseTopNumber = rootCellLength + index;
    let baseBottomNumber = index - rootCellLength;

    if (dim.isIntermediateVertical()) {
      adjacents.push(cells[baseTopNumber]);
      adjacents.push(cells[baseBottomNumber]);
    }

    if (dim.isTopLeftCorner()) {
      adjacents.push(cells[baseTopNumber + 1]);
    }

    if (dim.isTopRightCorner()) {
      adjacents.push(cells[baseTopNumber - 1]);
    }

    if (dim.isBottomRightCorner()) {
      adjacents.push(cells[baseBottomNumber - 1]);
    }

    if (dim.isBottomLeftCorner()) {
      adjacents.push(cells[baseBottomNumber + 1]);
    }

    if (dim.isTopIntermediateCross()) {
      adjacents.push(cells[baseTopNumber + 1]);
      adjacents.push(cells[baseTopNumber - 1]);
    }

    if (dim.isBottomIntermediateCross()) {
      adjacents.push(cells[baseBottomNumber + 1]);
      adjacents.push(cells[baseBottomNumber - 1]);
    }

    if (dim.isLeftIntermediateVertical()) {
      adjacents.push(cells[baseBottomNumber + 1]);
      adjacents.push(cells[baseTopNumber + 1]);
    }

    if (dim.isRightIntermediateVertical()) {
      adjacents.push(cells[baseBottomNumber - 1]);
      adjacents.push(cells[baseTopNumber - 1]);
    }

    if (dim.isIntermediate()) {
      adjacents.push(cells[baseTopNumber + 1]);
      adjacents.push(cells[baseTopNumber - 1]);
      adjacents.push(cells[baseBottomNumber + 1]);
      adjacents.push(cells[baseBottomNumber - 1]);
    }
    cell.adjacents = adjacents;
    return cell
  })
}
