import React from "react";
import { connect } from 'react-redux';
import * as action from '../Redux/actions/';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
      }
    }
  }

  handleInput = ({ target: { id, value }}) => {
    this.setState((prev) => ({
      user: { ...prev.user, [id]: value},
    }))
  }

  handleLogin = () => {
    const { user: { username, password }} = this.state;
    const { login, history } = this.props;

    if (username && password) {
      login(username);
      history.push("/dashboard")
    }
  }
  
  render() {
    const { username, password } = this.state;

    return(
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="username">
            Username
            <input
            type="text"
            id="username"
            onChange={ this.handleInput }
            value={ username }
            />
          </label>
          <label htmlFor="password">
            Password
            <input
            type="password"
            id="password"
            onChange={ this.handleInput }
            value={ password }
            />
            <button
            type="button"
            onClick={ this.handleLogin }
            >
              Entrar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (username) => { dispatch(action.loginAction(username))},
})

export default connect(null, mapDispatchToProps)(Login);
