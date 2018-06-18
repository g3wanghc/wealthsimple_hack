import React from 'react';
import './index.css';
import {Nav, Navbar, NavItem, Tabs, Tab} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './Navbar.js'

class Activity extends React.Component {
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
					<h3>Activity</h3>
					<div className="activity-left">
						TODO: add filtering options here
					</div>
					<div className="activity-right">
						Put activity history here
					</div>
				</div>
  		</div>
    );
  }
}

export default Activity;
