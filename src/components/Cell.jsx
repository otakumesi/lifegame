import React from 'react';
import ClassNames from 'classnames';

class Cell extends React.Component {
  handleClick(e) {
    if (!this.props.isExist) {
      this.props.produceCell(this.props.index);
    } else {
      this.props.killCell(this.props.index);
    }
  }

  render() {
    return (
      <div className={ClassNames('c-cell', this.props.isExist ? 'c-cell__isExist' : '')} onClick={this.handleClick.bind(this)}>
      </div>
    )
  }
}

export default Cell;
