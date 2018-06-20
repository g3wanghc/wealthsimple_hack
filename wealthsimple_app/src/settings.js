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
