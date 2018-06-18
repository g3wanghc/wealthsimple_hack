import React from 'react';
import './index.css';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './Navbar.js'

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
      		TODO: add stuff about team settings 
      	</div>
  		</div>
    );
  }
}

export default Settings;
