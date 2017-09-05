import React, { Component } from 'react';
import { /*BrowserRouter as Router, Route,*/ Link } from 'react-router-dom';
import CashOutReport from './CashOutReport';

const CashOutReportList = (props) => {
  return (
    <div className="center">


      <h3>Cash Out Report List</h3>
      <ul className="normal-list">
        {props.cash_out_reports.map((report, i) => {
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

export default CashOutReportList;