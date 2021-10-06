import React from 'react';
import * as action from '../Redux/actions';
import { connect } from 'react-redux';

class Logout extends React.Component {

  logout = () => {
    const { logout } = this.props;
    logout();
  }

  render() {
    return (
      <button
      type="button"
      onClick={ this.logout }
      >
        Logout
      </button>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => { dispatch(action.logoutAction())},
});

export default connect(null, mapDispatchToProps)(Logout);