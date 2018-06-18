import React from 'react';
import './index.css';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);  
    this.userLogOut = this.userLogOut.bind(this);
    this.switchPage = this.switchPage.bind(this);
  }

  userLogOut() {
    console.log("userLogout is called");
    this.props.loginHandler(false);
  }

  switchPage(newPage) {
    this.props.pageHandler(newPage);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a onClick={() => this.switchPage('dashboard')}>Wealthsimple for Teams</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={() => this.switchPage('profile')}>
            Profile
          </NavItem>
          <NavItem eventKey={2} onClick={() => this.switchPage('settings')}>
            Settings
          </NavItem>
          <NavItem eventKey={3} onClick={() => this.userLogOut(false)}>
            Log out
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default CustomNavbar;
