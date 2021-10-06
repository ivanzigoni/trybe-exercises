import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from "../Components/Logout";

class ClientesCadastrados extends React.Component {
  render() {
    const { loginInfo: { username, isLogged} } = this.props;
    if (isLogged) {
      return (
        <div>
          <h1>Bem vindo, {username}</h1>
          <Link to="/">Home</Link>
          <Logout />
        </div>
      )
    }
    return(
      <div>
        <h1>Login não efetuado</h1>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginInfo: state.user,
})

export default connect(mapStateToProps, null)(ClientesCadastrados)
