import React from 'react';
import './index.css';
import {Nav, Navbar, NavItem, Tabs, Tab} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './Navbar.js'

class Profile extends React.Component {
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
					<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
					  <Tab eventKey={1} title="Profile">
					    <h3>Your information</h3>
					    <p>First Name</p>
					    <p>Middle Name</p>
					    <p>Last Name</p>
					    <p>Email</p>
					    <p>Phone Number</p>
					    <p>Residential Address</p>
					    <p>Mailing Address</p>

					    <h3>Employment</h3>
					    <h3>Language Preferences</h3>
					  </Tab>
					  <Tab eventKey={2} title="Security">
					    <h3>Security</h3>
					  </Tab>
					  <Tab eventKey={3} title="Accounts">
					    <h3>Accounts</h3>
					  </Tab>
					  <Tab eventKey={4} title="Bank Accounts">
					    <h3>Bank Accounts</h3>
					  </Tab>
					  <Tab eventKey={5} title="Beneficiaries">
					    <h3>Beneficiaries</h3>
					  </Tab>
					</Tabs>
				</div>
  		</div>
    );
  }
}

export default Profile;
