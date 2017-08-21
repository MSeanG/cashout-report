import React, { Component } from 'react';

class NewUserForm extends Component {
  constructor() {
    super();
    this.state = {
      newUser: {}
    }
  }

  _handleNewPUserChange = (event) => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;

    const newUser = { ...this.state.newUser };
    newUser[attributeName] = attributeValue;

    this.setState({ newUser })
  };

  _addNewUser = (event) => {
    event.preventDefault();

    this.props.addNewUserToUserList(this.state.newUser);
  };

  render() {
    return (
      <div>
        <form id="new-user" onSubmit={this._addNewUser}>
          <legend>Create New User</legend>
            <div><input name="user_name" type="text" placeholder="Name" onChange={this._handleNewUserChange} /></div>
            <div><input name="pass_code" type="password" placeholder="Password" onChange={this._handleNewUserChange} /></div>
            <div><input type="submit" value="Submit" /></div>
        </form>
      </div>
    );

  }
}

export default NewUserForm;