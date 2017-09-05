import React, { Component } from 'react';
import axios from 'axios';
import CashOutList from './CashOutList';

class User extends Component {
  constructor(){
    super();
    this.state = {
      id: '',
      user_name: '',
      cash_out_forms: [],
      list: []
    }
  }

  componentWillMount(){
    const id = this.props.match.params.userId;
    axios.get(`/api/users/${id}`).then(res => {
      this.setState({
        id: res.data._id,
        user_name: res.data.user_name,
        cash_out_forms: res.data.cash_out_forms,
        list: res.data.list
      });
    });
  }

  render() {
    return (
      <div>
        <h3>Welcome {this.state.user_name}</h3>
        {/* <CashOutList list={this.state.list} cash_out_forms={this.state.cash_out_forms}/> */}
      </div>
    );
  }
}

export default User;