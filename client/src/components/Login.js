import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {

  render() {
    return (

      <div class="admin-view">
        <div className="center">
          <h1>Login</h1>
          <ul className="normal-list">
            <li><Link to="/admin-view">Admin</Link></li>
            <li><Link to="/user-view">User</Link></li>
          </ul>
        </div>
      </div>

    );
  }
}

export default Login;