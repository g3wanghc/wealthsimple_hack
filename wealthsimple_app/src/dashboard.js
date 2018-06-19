import React from 'react';
import {Button, FormGroup, FormControl, Well, ControlLabel, Radio} from 'react-bootstrap';
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
          <div className="dashboard-full-well">
            <Well bsSize="large">
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
            </Well>
          </div>

          <div className="dashboard-left-well">
            <Well bsSize="large">
              <h4>Milestones</h4>
            </Well>
          </div>
          <div className="dashboard-right-well">
            <Well bsSize="large">
              <h4>Daily Lottery</h4>
              <h3 className="lottery-text">Latest Winner: George</h3>
              <div className="lottery-text">
                <Countdown date={lotteryTime} />
              </div>
            </Well>
          </div>
          <div className="dashboard-left-well">
            <Well bsSize="large">
              <h3>Vote on next week's Portolio</h3>
              <form>
                <FormGroup>
                  <ControlLabel>If you decided to invest on your own and build a diversified portfolio, how do you think you'd do it?</ControlLabel>
                  <Radio name="answer-26">
                    Invest in many different stocks.
                  </Radio>{' '}
                  <Radio name="answer-27">
                    Invest in many different bonds.
                  </Radio>{' '}
                  <Radio name="answer-25">
                    Invest all my money in one stock or bond.
                  </Radio>
                  <Radio name="answer-28">
                    Invest in many different stocks and bonds
                  </Radio>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>If you were to invest %s, which scenario would you be happiest with?</ControlLabel>
                  <Radio name="answer-41">
                    I can take some losses (%s) to earn more long term (%s).
                  </Radio>{' '}
                  <Radio name="answer-40">
                    I'm willing to take small losses (%s) to earn a little long term (%s).
                  </Radio>{' '}
                  <Radio name="answer-42">
                    I'm comfortable with losses (%s) to maximize what I earn long term (%s).
                  </Radio>
                </FormGroup>
                <Button type="submit">Submit</Button>
              </form>
            </Well>
          </div>
          <div className="dashboard-right-well">
            <Well bsSize="large">
              <h4>Benefits</h4>
              <h5>Savings on fees: $100</h5>
              <h5>Free trades made: 60</h5>
              <h5>Reinvested dividends: $500</h5>
              <h5>Assets managed for free: $20,000</h5>
            </Well>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
