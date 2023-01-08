import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderComponent extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}

let mapToStateProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapToStateProps, { logout })(HeaderComponent)