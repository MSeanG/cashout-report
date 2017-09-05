import React, { Component } from 'react';
import { /*BrowserRouter as Router, Route,*/ Link } from 'react-router-dom';
import axios from 'axios';



class CashOutReportList extends Component {
  constructor(){
    super();
    this.state = {
      cash_out_reports: []
    }
  }

  componentWillMount(){
    axios.get("/api/users").then((res) => {
      this.setState({cash_out_reports: res.data});
    });
  }

  render() {
    return (
      <div className="center">


        <h3>User List</h3>
        <ul className="normal-list">
          {this.state.cash_out_reports.map((report, i) => {
            return (
              <li key={i}>
                <Link to={`/users/${report._id}`}> {report.cash_out_reports}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CashOutReportList;