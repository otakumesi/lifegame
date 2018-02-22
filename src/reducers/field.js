import Cell from '../models/Cell';

const initialState = {
  cells: Array(100).fill(0).map(() => new Cell())
};

export default function field(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
