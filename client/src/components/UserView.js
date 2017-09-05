import React, { Component } from 'react';
import { /*BrowserRouter as Router, Route,*/ Link } from 'react-router-dom';
import axios from 'axios';
//import CashOutList from './CashOutList';

class UserView extends Component {
  constructor(){
    super();
    this.state = {
      id: '',
      user_name: '',
      cash_out_report_list: [],
      list: []
    }
  }

  componentWillMount(){
    const id = this.props.match.params.userId;
    axios.get(`/api/users/${id}`).then(res => {
      console.log(res.data)
      this.setState({
        id: res.data._id,
        user_name: res.data.user_name,
        cash_out_report_list: res.data.cash_out_report_list,
        list: res.data.list
      });
    });
  }

  render() {
    return (
      <div>
        <h3>Cash Out Report List for {this.state.user_name}</h3>
        {/* <CashOutList list={this.state.list} cash_out_forms={this.state.cash_out_forms}/> */}
        <ul className="normal-list">
          {this.state.cash_out_report_list.map((report_list, i)=>{
            return (
              <li key={i}>
                <Link to={`/users/${report_list._id}`}> {report_list.cash_out_report_list}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserView;