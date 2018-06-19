import React from 'react';
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
            <a onClick={() => this.switchPage('dashboard')}> W </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullLeft>
          <NavItem eventKey={1} onClick={() => this.switchPage('dashboard')}>
            Portolio
          </NavItem>
          <NavItem eventKey={1} onClick={() => this.switchPage('activity')}>
            Activity
          </NavItem>
          <NavItem eventKey={1} onClick={() => this.switchPage('funding')}>
            Funding
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={() => this.switchPage('profile')}>
            Profile
          </NavItem>
          <NavItem eventKey={2} onClick={() => this.switchPage('settings')}>
            Team Settings
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
