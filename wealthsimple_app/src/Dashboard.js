import React from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './navbar.js'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CustomNavbar loginHandler={this.props.loginHandler} pageHandler={this.props.pageHandler}/>
        <h3 className="dashboard-wrapper">Welcome, John.</h3>
        <div className="container">
          <div className="dashboard-whole">
            <h2>Team Stats</h2>
            <h4>Team Portolio Balance: $1000</h4>
            <h4>Total Earnings: $150</h4>
            <h4>Your Contributions: $100</h4>
          </div>
          <div className="dashboard-left">
          </div>
          <div className="dashboard-right">
            <h3>Recent Contributions</h3>
            <h5>Go Muramatsu: $25</h5>
            <h5>Go Muramatsu: $25</h5>
          </div>
          <div className="dashboard-left-small">
            <h3>Deposit</h3>
          </div>
          <div className="dashboard-right-small">
            <h3>Benefits</h3>
            <h5>Savings on fees: $100</h5>
            <h5>Free trades made: 60</h5>
            <h5>Reinvested dividends: $500</h5>
            <h5>Assets managed for free: $20,000</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
