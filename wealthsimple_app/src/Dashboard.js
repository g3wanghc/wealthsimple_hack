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
        <div className="container">        
          <div className="dashboard-whole">
            <p className="dashboard-wrapper">Good evening, Andrew.</p>
            <h2>Databaes - Boys Band</h2>
            <h4>Team Portolio Balance: $1000</h4>
            <h4>Total Earnings: $150</h4>
            <h4>Your Contributions: $100</h4>
          </div>

          <div className="dashboard-left">
            <h4>Milestones</h4>
          </div>
          <div className="dashboard-right">
            <h4>Daily Lottery</h4>
          </div>
          <div className="dashboard-left-small">
            <h4>Vote on next week's Portolio</h4>
          </div>
          <div className="dashboard-right-small">
            <h4>Benefits</h4>
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
