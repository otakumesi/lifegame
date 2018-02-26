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
        cells: action.value
      }
    default:
      return state;
  }
}

function buildCellPaths(cells = []) {
  return cells.map((cell, index) => {
    let adjacents = []
    let dim = new CellDimension(cells.length, index);
    cell.adjacents = dim.adjacents();
    return cell
  })
}
