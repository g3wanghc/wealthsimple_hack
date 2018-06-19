import React from 'react';
import {Nav, Navbar, NavItem, Tabs, Tab, FormGroup, ControlLabel, FormControl, FromGroup, Button} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './navbar.js'

class Funding extends React.Component {
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
					<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Deposit">
              <h3>Deposit</h3>
              <form>
                <FormGroup controlId="formControlsFromAccount">
                  <ControlLabel>From</ControlLabel>
                  <FormControl componentClass="select" placeholder="Choose Account">
                    <option value="personalaccount1">Personal Account 1</option>
                    <option value="personalaccount2">Personal Account 2</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsToAccount">
                  <ControlLabel>To</ControlLabel>
                  <FormControl componentClass="select" placeholder="Choose Account">
                    <option value="teamaccount1">Team Account 1</option>
                    <option value="teamaccount2">Team Account 2</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsDepositAmount">
                  <FormControl placeholder="Enter amount to deposit" />
                </FormGroup>
                <Button type="submit">Deposit</Button>
              </form>
            </Tab>
            <Tab eventKey={2} title="Withdrawal">
              <h3>Withdrawal</h3>
              <form>
                <FormGroup controlId="formControlsFromAccount">
                  <ControlLabel>From</ControlLabel>
                  <FormControl componentClass="select" placeholder="Choose Account">
                    <option value="teamaccount1">Team Account 1</option>
                    <option value="teamaccount2">Team Account 2</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsToAccount">
                  <ControlLabel>To</ControlLabel>
                  <FormControl componentClass="select" placeholder="Choose Account">
                    <option value="bankaccount1">Bank Account 1</option>
                    <option value="bankaccount2">Bank Account 2</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsWithdrawalAmount">
                  <FormControl placeholder="Enter amount to withdraw" />
                </FormGroup>
                <Button type="submit">Withdraw</Button>
              </form>
            </Tab>
          </Tabs>
				</div>
  		</div>
    );
  }
}

export default Funding;