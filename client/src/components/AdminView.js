import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import NewUserForm from './NewUserForm';
//import UserList from './UserList';

class AdminView extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount(){
    axios.get("/api/users").then((res) => {
      this.setState({users: res.data});
    });
  }

  render() {
    return (
      <div className="center">

        <h1>Admin View</h1>
        <NewUserForm
              // addNewProductToProductList={this.props.addNewProductToProductList}/>
              addNewUserToUserList={this.props.addNewUserToUserList}/>

        <h3>User List</h3>
        <ul className="normal-list">
          {this.state.users.map((user, i) => {
            return (
              <li key={i}>
                <Link to={`/users/${user._id}`}> {user.user_name}'s Page</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AdminView;