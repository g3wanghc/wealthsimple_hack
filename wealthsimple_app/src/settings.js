import React from 'react';
import {Nav, Navbar, NavItem, Radio, Button, FormGroup, ControlLabel, Well, Form, FormControl} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './navbar.js'

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: null,
      goalAmount: 0,
      lotteryEnabled: "enabled",
      lotteryAmount: 26.35,
      lotteryFrequency: 'daily',
      goalChanged: false,
      lotteryChanged: false
    }

    this.userLogOut = this.userLogOut.bind(this);
    this.handleGoalSubmission = this.handleGoalSubmission.bind(this);
    this.handleGoalNameChange = this.handleGoalNameChange.bind(this);
    this.handleGoalAmountChange = this.handleGoalAmountChange.bind(this);
    this.handleLotterySubmission = this.handleLotterySubmission.bind(this);
    this.handleLotteryEnabledChange = this.handleLotteryEnabledChange.bind(this);
    this.handleLotteryAmountChange = this.handleLotteryAmountChange.bind(this);
    this.handleLotteryFrequencyChange = this.handleLotteryFrequencyChange.bind(this);
  }

  userLogOut() {
    console.log("userLogout is called");
    this.props.loginHandler(false);
  }

  handleGoalSubmission() {
    console.log("submitting new goal");
    console.log(this.state);
    this.props.goalHandler(this.state.goal, this.state.goalAmount);
    this.setState({goalChanged: true});
  }

  handleGoalNameChange(e) {
    this.setState({ goal: e.target.value });
  }

  handleGoalAmountChange(e) {
    this.setState({ goalAmount: e.target.value });
  }

  handleLotteryEnabledChange(e) {
    this.setState({ lotteryEnabled: e.target.value });
  }

  handleLotteryAmountChange(e) {
    this.setState({ lotteryAmount: e.target.value });
  }

  handleLotteryFrequencyChange(e) {
    this.setState({ lotteryFrequency: e.target.value });
  }

  handleLotterySubmission() {
    console.log("submitting new lottery settings");
    console.log(this.state);
    this.props.lotteryHandler(this.state.lotteryEnabled, this.state.lotteryAmount, this.state.lotteryFrequency);
    this.setState({lotteryChanged: true});
  }

  render() {
    return (
      <div>
      	<CustomNavbar loginHandler={this.props.loginHandler} pageHandler={this.props.pageHandler} />
      	<div className="container">
          <p style={{
            fontSize: '22px',
            marginTop: '10px',
            marginBottom: '30px',
            marginLeft: '10px',
            fontWeight: 'bold'
          }}>
              Team Settings
          </p>
          <div className="white-box">
            {this.state.goalChanged === false  ?
              <div>
                <h3>Goals</h3>
                <form>
                  <FormGroup controlId="formInlineGoal">
                    <ControlLabel>Goal</ControlLabel>{' '}
                    <FormControl type="text" placeholder="Enter goal" onChange={this.handleGoalNameChange} />
                  </FormGroup>{' '}
                  <FormGroup controlId="formInlineGoalAmount">
                    <ControlLabel>Amount</ControlLabel>{' '}
                    <FormControl placeholder="Enter goal amount" onChange={this.handleGoalAmountChange}  />
                  </FormGroup>{' '}
                  <Button className="custom-button" onClick={this.handleGoalSubmission}>Add goal</Button>
                </form>
              </div>
            : 
              <div>
                <center>
                  <h3>Your goal has been updated!</h3>
                </center>
              </div>
            }

          </div>
          <div className="white-box">
            {this.state.lotteryChanged === false  ?
            <div>
              <h3>Lottery Settings</h3>
              <form>
                <FormGroup controlId="formControlsLotteryEnabled">
                  <ControlLabel>Enable Lottery</ControlLabel>{' '}
                  <FormControl componentClass="select" placeholder="Enable/Disable Lottery" onChange={this.handleLotteryEnabledChange}>
                    <option value="disabled">Disable</option>
                    <option value="enabled">Enable</option>
                  </FormControl>
                </FormGroup>{' '}
                <FormGroup controlId="formInlineLotteryJackpot">
                  <ControlLabel>Lottery Jackpot</ControlLabel>{' '}
                  <FormControl placeholder="Enter jackpot amount" onChange={this.handleLotteryAmountChange}  />
                </FormGroup>{' '}
                <FormGroup controlId="formControlsLotteryFrequency">
                  <ControlLabel>Lottery Frequency</ControlLabel>{' '}
                  <FormControl componentClass="select" placeholder="Lottery frequency" onChange={this.handleLotteryFrequencyChange}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </FormControl>
                </FormGroup>{' '}
                <Button className="custom-button" onClick={this.handleLotterySubmission}>Save Changes</Button>
              </form>
            </div>
            : 
              <div>
                <center>
                  <h3>The lottery has been updated!</h3>
                </center>
              </div>
            }
          </div>
        </div>
  		</div>
    );
  }
}

export default Settings;
