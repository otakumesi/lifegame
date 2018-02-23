import Cell from "../models/Cell";
import { PRODUCE_CELL, KILL_CELL } from "../actions/FieldActionCreators";

const initialState = {
  cells: Array(100)
    .fill(0)
    .map(() => new Cell())
};

export default function field(state = initialState, action) {
  switch (action.type) {
    case PRODUCE_CELL:
      let cells = state.field.cells;
      cells[action.index] = cells[action.index].birth();
      return {
        ...state,
        field: {
          cells: cells
        }
      };
    case KILL_CELL:
      let cells = state.field.cells;
      cells[action.index] = cells[action.index].death();
      return {
        ...state,
        field: {
          cells: cells
        }
      };
    default:
      return state;
  }
}
