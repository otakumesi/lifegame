import React from 'react';

class Cell extends React.Component {
  render() {
    return (
      <div className="c-cell {isExist ? 'c_cell__isExist' : ''}">
      </div>
    )
  }
}

export default Cell;
