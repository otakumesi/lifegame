import React from 'react';

class Cell extends React.Component {
  render() {
    return (
      <li className="c-cell">
        {this.isExist ? '■' : '□'}
      </li>
    )
  }
}
