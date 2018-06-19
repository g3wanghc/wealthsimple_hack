import React from 'react';
import './index.css';
import {Nav, Navbar, NavItem, Tabs, Tab} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './Navbar.js'

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
            </Tab>
            <Tab eventKey={2} title="Withdrawal">
              <h3>Withdrawal</h3>
            </Tab>
          </Tabs>
				</div>
  		</div>
    );
  }
}

export default Funding;
