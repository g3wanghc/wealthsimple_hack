import React from 'react';
import {Nav, Navbar, NavItem, Radio, Button, FormGroup, ControlLabel, Well, Form, FormControl} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './navbar.js'

class Settings extends React.Component {
  constructor(props) {
    super(props);  
    this.userLogOut = this.userLogOut.bind(this);
  }

  userLogOut() {
    console.log("userLogout is called");
    this.props.loginHandler(false);
  }

  render() {
    return (
      <div>
      	<CustomNavbar loginHandler={this.props.loginHandler} pageHandler={this.props.pageHandler} />
      	<div className="main-content-wrapper">
          <Well bsSize="large">
            <h3>Goals</h3>
            <Form inline>
              <FormGroup controlId="formInlineGoal">
                <ControlLabel>Goal</ControlLabel>{' '}
                <FormControl type="text" placeholder="Enter goal" />
              </FormGroup>{' '}
              <FormGroup controlId="formInlineEmail">
                <ControlLabel>Amount</ControlLabel>{' '}
                <FormControl type="email" placeholder="Enter goal amount" />
              </FormGroup>{' '}
              <Button type="submit">Add goal</Button>
            </Form>
          </Well>
          <Well bsSize="large">
            <h3>Lottery Settings</h3>
          </Well>

          
          <Well bsSize="large">
            <h3>Portfolio Survey</h3>
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
  		</div>
    );
  }
}

export default Settings;
