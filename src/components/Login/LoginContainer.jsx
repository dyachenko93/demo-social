import Login from './Login'
import { login } from '../../redux/auth-reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({ state: state.auth })

export default compose(
  connect(mapStateToProps, { login }),
)(Login)