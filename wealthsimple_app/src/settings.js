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
      goalAmount: 1
    }

    this.userLogOut = this.userLogOut.bind(this);
    this.handleGoalSubmission = this.handleGoalSubmission.bind(this);
    this.handleGoalNameChange = this.handleGoalNameChange.bind(this);
    this.handleGoalAmountChange = this.handleGoalAmountChange.bind(this);
  }

  userLogOut() {
    console.log("userLogout is called");
    this.props.loginHandler(false);
  }

  handleGoalSubmission() {
    console.log("submitting new goal");
    console.log(this.state);
    this.props.goalHandler(this.state.goal, this.state.goalAmount);
  }

  handleGoalNameChange(e) {
    this.setState({ goal: e.target.value });
  }

  handleGoalAmountChange(e) {
    this.setState({ goalAmount: e.target.value });
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
              <Button onClick={this.handleGoalSubmission}>Add goal</Button>
            </form>
          </div>
          <div className="white-box">
            <h3>Lottery Settings</h3>
          </div>
        </div>
  		</div>
    );
  }
}

export default Settings;
