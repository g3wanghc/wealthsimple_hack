import React from 'react';
import './index.css';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';

class CustomNavbar extends React.Component {
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
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Wealthsimple for Teams</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={() => this.userLogOut(false)}>
            Profile
          </NavItem>
          <NavItem eventKey={1} onClick={() => this.userLogOut(false)}>
            Settings
          </NavItem>
          <NavItem eventKey={1} onClick={() => this.userLogOut(false)}>
            Log out
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default CustomNavbar;
