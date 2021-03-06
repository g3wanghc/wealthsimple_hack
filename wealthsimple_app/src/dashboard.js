import React from 'react';
import {Button, FormGroup, FormControl, ControlLabel, Radio} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './navbar.js'
import Countdown from 'react-countdown-now';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      bankAccounts: ["RBC (**** **** **** 000)", "Tangerine (**** **** **** 001)"],
      investmentAccounts: ["Databaes - First Record Fund"],
      depositAmount: 0
    };

    this.handleDepositSubmission = this.handleDepositSubmission.bind(this);
    this.handleBalanceChange = this.handleBalanceChange.bind(this);
  }  

  handleDepositSubmission() {
    console.log("submitting deposit");
    console.log(this.state);
    this.props.balanceHandler(this.state.depositAmount);
  }

  handleBalanceChange(e) {
    this.setState({ depositAmount: Number(e.target.value) });
  }

  renderer ({ hours, minutes, seconds, completed }) {
      return <span>{hours} hours {minutes} mins {seconds} secs</span>;
  };

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
              <h2>${Math.round(this.props.getState().teamPorfolioBalance * 100) / 100}</h2>
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
              <h2>${Math.round(this.props.getState().yourContributions * 100) / 100}</h2>
            </div>
            <iframe 
              style={{
                float: 'right',
                marginTop: '-100px',
                marginRight: '20px'
              }}
              id="forecast_embed" 
              frameborder="0" 
              width="300px" 
              height="200px"
              src="//forecast.io/embed/#lat=43.6532&lon=-79.3832&name=Toronto&units=uk">
            </iframe>
          </div>

          <div className="dashboard-left">
            <h3>Milestones</h3>

            <AreaChart width={700} height={300} data={
                [
                  {name: 'Today', Andrew: 326, Hanchen: 100, Go: 100},
                  {name: 'July', Andrew: 345, Hanchen: 106, Go: 106},
                  {name: 'August', Andrew: 365, Hanchen: 112, Go: 112},
                  {name: 'September', Andrew: 387, Hanchen: 119, Go: 119}
                ]
              }
              margin={{top: 35, right: 0, left: 0, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name" hide/>
              <YAxis hide/>
              <Tooltip/>
              <Area type='monotone' dataKey='Andrew' stackId="1" stroke='#8884d8' fill='#8884d8' />
              <Area type='monotone' dataKey='Hanchen' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
              <Area type='monotone' dataKey='Go' stackId="1" stroke='#ffc658' fill='#ffc658' />
            </AreaChart>
            <br></br>
            {this.props.getState().goalAmount > 0 ? <h4>Milestone: {this.props.getState().goalName} - ${this.props.getState().goalAmount}</h4> : null}
          </div>
          <div className="dashboard-right">
            <div style={{
              width: '320px',
              fontFamily: 'Arial, Helvetica, sans-serif' 
            }}>
              <h3>Deposit</h3>
                <FormGroup controlId="formControlsFromAccount">
                  <h5>From</h5>
                  <FormControl componentClass="select" placeholder="Choose Account">
                    {this.state.bankAccounts.map(function(item, i){
                      return <option key={i}>{item}</option>
                    })}
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsToAccount">
                  <h5>To</h5>
                  <FormControl componentClass="select" placeholder="Choose Account">
                    {this.state.investmentAccounts.map(function(item, i){
                      return <option key={i}>{item}</option>
                    })}
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsDepositAmount">
                  <FormControl placeholder="Amount" onChange={this.handleBalanceChange}/>
                </FormGroup>
                <Button onClick={this.handleDepositSubmission}>Contribute</Button>
              </div>
          </div>
          {this.props.getState().voteAvailable === true  ?
            <div className="dashboard-left" style={{
              marginBottom: '20px'
            }}>
              <h3>Vote on next month's Portolio</h3>
              <form style={{
                marginTop: '25px'
              }}>
                <FormGroup>
                  <h5>If you decided to invest on your own and build a diversified portfolio, how do you think you'd do it?</h5>
                  <Radio name="radioGroup">
                    Invest in many different stocks.
                  </Radio>{' '}
                  <Radio name="radioGroup">
                    Invest in many different bonds.
                  </Radio>{' '}
                  <Radio name="radioGroup">
                    Invest all my money in one stock or bond.
                  </Radio>
                  <Radio name="radioGroup">
                    Invest in many different stocks and bonds
                  </Radio>
                </FormGroup>
                <br></br>
                <FormGroup>
                  <h5>If you were to invest, which scenario would you be happiest with?</h5>
                  <Radio name="radioGroup2">
                    I can take some losses to earn more long term.
                  </Radio>{' '}
                  <Radio name="radioGroup2">
                    I'm willing to take small losses to earn a little long term.
                  </Radio>{' '}
                  <Radio name="radioGroup2">
                    I'm comfortable with losses to maximize what I earn long term.
                  </Radio>
                </FormGroup>
                <Button onClick={this.props.voteHandler}>Submit Vote</Button>
              </form>
            </div>
          : 
            <div className="dashboard-left-small" style={{
              marginBottom: '20px'
            }}>
              <center>
                <h3>Thanks for voting!</h3>
                <h4>Your portfolio will be updated on July 1, 2018.</h4>
              </center>
            </div>
          }

          {this.props.getState().lotteryEnabled === "enabled"  ?
          <div className="dashboard-right-lottery">
            <h3 style={{
              marginBottom: '20px'
            }}>Team Lottery</h3>
            <h4>Next Jackpot</h4>
            <div style={{
            }}>${this.props.getState().lotteryAmount}</div>
            <h4>Countdown</h4>
            <div style={{
            }}>
              <Countdown date={lotteryTime} renderer={this.renderer}/>
            </div>
          </div>
          : null}

          <div className="dashboard-right-small" style={{
            marginTop: '10px'
          }}>
            <h3>Contact</h3>
            <br></br>
            <div><a>Facebook</a></div>
            <div><a>Twitter</a></div>
            <div><a>Instagram</a></div>
            <div><a>Snapchat</a></div>
            <br></br>
            <div>(415) 234 - 5678</div>
            <div><a>support@squad-gains.io</a></div>
            <div>Wealthsimple HQ - Toronto</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
