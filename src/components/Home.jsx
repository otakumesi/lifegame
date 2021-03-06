import React from 'react';
import FieldContainer from '../containers/FieldContainer';

class Home extends React.Component {
  // Header, Footerなどをここで挿入する？
  // あるいはAppか？
  render() {
    return (
      <div className="l-global-outer">
        <div className="l-global-inner">
          <header className="l-header u-position-relative">
            <h1 className="c-title">LIFEGAME</h1>
            <div className="c-operator-box">
              <button
                className="c-button-start c-button__fixed-top"
                onClick={this.props.startGame}
                disabled={this.props.isStarted}>
                  Start!!!
              </button>
            </div>
          </header>
          <main className="l-main">
            <FieldContainer />
          </main>
          <footer className="l-footer">
          </footer>
        </div>
    </div>
    )
  }
}

export default Home;
