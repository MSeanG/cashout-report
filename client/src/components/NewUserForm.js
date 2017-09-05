import React, { Component } from 'react';

import axios from "axios";

//const AddNewUser = props => {
//  const {user_name, pass_code, value} = props.user_name;
//  // const {pass_code} = props.pass_code;
//  return (
//    <fieldset>
//
//      <label htmlFor={`${value}user_name`}>User Name: </label>
//      <input onChange={props.changeEvent} type="text"
//        value={user_name} name={`${value}user_name`}
//        type="user_name"
//      />
//      <label htmlFor={`${value}user_name`}>Pass Code: </label>
//      <input onChange={props.changeEvent} type="password"
//        value={pass_code} name={`${value}user_name`}
//        type="pass_code"
//      />
//    </fieldset>
//  );
//};

class NewUserForm extends Component {
  constructor() {
    super();
    this.state = {
      newUser: {
        user_name: "",
        pass_code: ""
      }
    };
  }
  _changeUser = e => {
    const newState = {...this.state};
    newState.newUser.user_name = e.target.value;
    this.setState(newState);
  }
  _changePass = e => {
    const newState = {...this.state};
    newState.newUser.pass_code = e.target.value;
    this.setState(newState);
  }
  _changeEvent = (event) => {
    const type = event.target.attributes.type.value;

    const newState = {...this.state};

    // if (type === "question") {
      // questionChanged.question = event.target.value;
    // } else {
      // questionChanged.answer = event.target.value;
    // }

    this.setState({ newState })
  };

  //_addNewUser = (event) => {
  //  event.preventDefault();
  //
  //  this.props.addNewUser(this.state.newUser);
  //};
  _addNewUser = (event) => {
    event.preventDefault();
    axios.post("/api/users", this.state).then((res) => {
      console.log(res);
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form id="new-user" onSubmit={this._addNewUser}>
          <legend>Create New User</legend>
            <div>
              <input
                name="user_name"
                type="text"
                placeholder="Name"
                onChange={this._changeUser}
                value={this.state.newUser.user_name}
              />
            </div>
            <div>
              <input
                name="pass_code"  
                type="password"
                placeholder="Password"
                onChange={this._changePass}
                value={this.state.newUser.pass_code}
              />
            </div>
            <div><input type="submit" value="Submit" /></div>
        </form>
      </div>
    );

  }
}

export default NewUserForm;