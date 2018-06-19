import React from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './navbar.js'
import Countdown from 'react-countdown-now';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var lotteryTime = new Date();
    if (lotteryTime.getHours() > 19) {
      lotteryTime.setDate(lotteryTime.getDate() + 1)
    }
    lotteryTime.setHours(20);
    lotteryTime.setMinutes(0);
    lotteryTime.setSeconds(0);

    return (
      <div>
        <CustomNavbar loginHandler={this.props.loginHandler} pageHandler={this.props.pageHandler}/>
        <div className="container">        
          <div className="dashboard-whole">
            <p className="dashboard-wrapper">Good evening, Andrew.</p>
            <h2>Databaes - Data Flows</h2>
            
            <div style={{
              float: 'left',
            }}>
              <h5>Team Portolio Balance</h5>
              <h2>$526.93</h2>
            </div>
            <div style={{
              float: 'left',
              marginLeft: '50px',
            }}>
              <h5>Total Earnings</h5>
              <h2>$26.93</h2>
            </div>
            <div style={{
              float: 'left',
              marginLeft: '50px'
            }}>
              <h5>Your Contributions</h5>
              <h2>$150.00</h2>
            </div>
          </div>

          <div className="dashboard-left">
            <h4>Milestones</h4>
          </div>
          <div className="dashboard-right">
            <h4>Daily Lottery</h4>
            <h3 className="lottery-text">Latest Winner: George</h3>
            <div className="lottery-text">
              <Countdown date={lotteryTime} />
            </div>
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
