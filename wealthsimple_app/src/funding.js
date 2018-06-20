import React from 'react';
import {Nav, Navbar, NavItem, Tabs, Tab, FormGroup, ControlLabel, FormControl, FromGroup, Button, Well} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './navbar.js'

class Funding extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { 
      bankAccounts: ["RBC (**** **** **** 000)", "Tangerine (**** **** **** 001)"],
      investmentAccounts: ["Databaes Music Fund"]
    };
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
      	<div className="container">
          <p style={{
            fontSize: '22px',
            marginTop: '10px',
            marginBottom: '30px',
            marginLeft: '10px',
            fontWeight: 'bold'
          }}>
            Funding
          </p>
					<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Deposit">
              <div className="white-box">
                <h3>Deposit</h3>
                <form>
                  <FormGroup controlId="formControlsFromAccount">
                    <ControlLabel>From</ControlLabel>
                    <FormControl componentClass="select" placeholder="Choose Account">
                      {this.state.bankAccounts.map(function(item, i){
                        console.log('test');
                        return <option key={i}>{item}</option>
                      })}
                    </FormControl>
                  </FormGroup>
                  <FormGroup controlId="formControlsToAccount">
                    <ControlLabel>To</ControlLabel>
                    <FormControl componentClass="select" placeholder="Choose Account">
                      {this.state.investmentAccounts.map(function(item, i){
                        console.log('test');
                        return <option key={i}>{item}</option>
                      })}
                    </FormControl>
                  </FormGroup>
                  <FormGroup controlId="formControlsDepositAmount">
                    <FormControl placeholder="Enter amount to deposit" />
                  </FormGroup>
                  <Button type="submit">Deposit</Button>
                </form>
              </div>
            </Tab>
            <Tab eventKey={2} title="Withdrawal">
              <div className="white-box">
                <h3>Withdrawal</h3>
                <form>
                  <FormGroup controlId="formControlsFromAccount">
                    <ControlLabel>From</ControlLabel>
                    <FormControl componentClass="select" placeholder="Choose Account">
                      {this.state.investmentAccounts.map(function(item, i){
                        console.log('test');
                        return <option key={i}>{item}</option>
                      })}
                    </FormControl>
                  </FormGroup>
                  <FormGroup controlId="formControlsToAccount">
                    <ControlLabel>To</ControlLabel>
                    <FormControl componentClass="select" placeholder="Choose Account">
                      {this.state.bankAccounts.map(function(item, i){
                        console.log('test');
                        return <option key={i}>{item}</option>
                      })}
                    </FormControl>
                  </FormGroup>
                  <FormGroup controlId="formControlsWithdrawalAmount">
                    <FormControl placeholder="Enter amount to withdraw" />
                  </FormGroup>
                  <Button type="submit">Withdraw</Button>
                </form>
              </div>
            </Tab>
          </Tabs>
				</div>
  		</div>
    );
  }
}

export default Funding;
