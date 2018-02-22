import { connect } from 'react-redux';
import Field from '../components/Field';

const mapStateToProps = (state, ownProps) => {
  return {
    cells: state.field.cells
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
