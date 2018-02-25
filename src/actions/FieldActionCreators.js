export const START_GAME = "START_GAME";
export const RENDER_NEXT_FIELD = "RENDER_NEXT_FIELD";
export const PRODUCE_CELL = "PRODUCE_CELL";
export const KILL_CELL = "KILL_CELL";

export function produceCell(index) {
  return {
    type: PRODUCE_CELL,
    index,
    value: true
  };
}

export function killCell(index) {
  return {
    type: KILL_CELL,
    index,
    value: false
  };
}

export function renderNextField(cells) {
  return {
    type: RENDER_NEXT_FIELD,
    value: cells
  }
}

export function startGame() {
  return {
    type: START_GAME,
    value: true
  }
}
