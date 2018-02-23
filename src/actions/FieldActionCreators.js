export PRODUCE_CELL = "PRODUCE_CELL";
export KILL_CELL = "KILL_CELL";

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
