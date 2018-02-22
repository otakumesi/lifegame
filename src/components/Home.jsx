import React from 'react';
import FieldContainer from '../containers/FieldContainer';

class Home extends React.Component {
  // Header, Footerなどをここで挿入する？
  // あるいはAppか？
  render() {
    return (
    <div className="l-global-wrapper">
      <header className="l-header">
      </header>
      <main className="l-main">
        <FieldContainer />
      </main>
      <footer className="l-footer">
      </footer>
    </div>
    )
  }
}

export default Home;
