import { connect } from 'react-redux';
import Field from '../components/Field';
import { startGame, produceCell, killCell, renderNextField } from '../actions/FieldActionCreators';

const mapStateToProps = (state, ownProps) => {
  return {
    cells: state.field.cells,
    isStarted: state.field.isStarted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    produceCell: index => dispatch(produceCell(index)),
    killCell: index => dispatch(killCell(index)),
    renderNextField: cells => dispatch(renderNextField(cells)),
    startGame: () => dispatch(startGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
