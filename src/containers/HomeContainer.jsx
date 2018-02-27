import { connect } from 'react-redux';
import Home from '../components/Home';
import { startGame } from '../actions/FieldActionCreators';

const mapStateToProps = (state, ownProps) => {
  return {
    isStarted: state.field.isStarted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
