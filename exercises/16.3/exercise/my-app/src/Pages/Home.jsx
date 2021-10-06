import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Logout from "../Components/Logout";

class Home extends React.Component {

  renderLogin = () => (
    <div>
      <h3>Hello</h3>
      <Link to="/login">Login</Link>
    </div>
  )

  renderHome = (username) => (
    <div>
      <h3>Hello, { username }</h3>
      <Logout />
    </div>
  )

  render() {
    const { loginInfo: { username, isLogged } } = this.props;
    return(
      <div>
        <h1>Home</h1>
        {isLogged ? this.renderHome(username) : this.renderLogin()  }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginInfo: state.user,
})

export default connect(mapStateToProps, null)(Home);
