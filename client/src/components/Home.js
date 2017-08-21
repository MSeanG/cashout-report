import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styled from "styled-components";
/* import axios from 'axios'; */

class Home extends Component {

  render() {
    return (
      <div className="center">

        <h1>End of Shift Cash Out Report</h1>
        <Link to="/cash-out-form">New Cash Out Report</Link>
        <p>Other important notes about upcomming events, special, holidays etc. will appear here.</p>

      </div>
    );
  }
}

export default Home;