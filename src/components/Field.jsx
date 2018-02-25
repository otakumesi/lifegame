import React from 'react';
import Cell from './Cell';

class Field extends React.Component {
  componentDidUpdate(prevProps, prefState) {
    if(this.props.isStarted) {
      setTimeout(() => this.updateCells(), 1000);
    }
  }

  updateCells() {
    let cells = this.props.cells;
    let newCells = cells.map((cell, i) => {
      let newCell = {...cell};
      let lengthOfExistingAdjacents = newCell.adjacents.filter((adjacent) => adjacent.isExist).length
      if (lengthOfExistingAdjacents >= 4 || lengthOfExistingAdjacents <= 1) {
        newCell.isExist = false
      }
      if (lengthOfExistingAdjacents === 3){
        newCell.isExist = true
      }
      return newCell;
    });
    this.props.renderNextField(newCells)
  }

  render() {
    const { cells } = this.props;
    const CellItems = cells.map((cell, index) =>
      <Cell
      key={cell.key}
      index={index}
      isExist={cell.isExist}
      produceCell={this.props.produceCell}
      killCell={this.props.killCell}
      />
    )
    return (
      <div>
        <button
           onClick={this.props.startGame}
           disabled={this.props.isStarted}>
            Start!!!
        </button>
      <div className="c-cells">
        {CellItems}
      </div>
      </div>
    )
  }
}

export default Field;
