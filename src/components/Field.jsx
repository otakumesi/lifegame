import React from 'react';
import Cell from './Cell';
import chunk from 'lodash.chunk';
import ClassNames from 'classnames';

class Field extends React.Component {
  componentDidUpdate(prevProps, prefState) {
    if(this.props.isStarted) {
      setTimeout(() => this.updateCells(), 1000);
    }
  }

  updateCells() {
    let cells = this.props.cells;
    let newCells = cells.map((cell) => {
      let newCell = {...cell};
      let lengthOfExistingAdjacents = newCell.adjacents.filter((adjacent) => cells[adjacent].isExist).length
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
    const baseCellNumber = Math.sqrt(cells.length);
    const cellChunks = chunk(cells, baseCellNumber);
    return (
      <div>
        <div className="c-cells">
          {
            cellChunks.map((cellChunk, chunkIndex) =>
            <div className={ClassNames('c-cell-row', 'u-flex', 'u-flex__center')} key={chunkIndex}>
              {
                cellChunk.map((cell, cellIndex) =>
                    <Cell
                      key={cell.key}
                      index={(chunkIndex * baseCellNumber) + cellIndex}
                      isExist={cell.isExist}
                      produceCell={this.props.produceCell}
                      killCell={this.props.killCell}
                    />)
              }
            </div>)
          }
        </div>
      </div>
    )
  }
}

export default Field;
