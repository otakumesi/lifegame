import { connect } from 'react-redux';
import Field from '../components/Field';
import { produceCell, killCell } from '../actions/FieldActionCreators';

const mapStateToProps = (state, ownProps) => {
  return {
    cells: state.field.cells
  }
}

const mapDispatchToProps = dispatch => {
  return {
    produceCell: index => dispatch(FieldActions.produceCell(index)),
    killCell: index => dispatch(FieldActions.killCell(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
