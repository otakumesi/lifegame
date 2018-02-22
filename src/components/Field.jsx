import React from 'react';
import Cell from './Cell';

class Field extends React.Component {
  render() {
    const { cells } = this.props;
    const CellItems = cells.map((cell) =>
      <Cell key={cell.id} isExist={cell.isExist} />
    )
    return (
      <ul>
        {CellItems}
      </ul>
    )
  }
}

export default Field;
