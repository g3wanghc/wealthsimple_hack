import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Helpers from './helpers.js';
import Icon from './static/acronym.png';
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
      <Navbar
        style={{
          height: '80px',
          verticalAlign: 'middle'
        }}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <img src={Icon}
              style={{
                width: '70px',
                height: '70px',
                marginTop: '5px'
              }}
            />
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullLeft
          style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                marginTop: '12px',
                fontWeight: '500'
              }}
        >
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
        <Nav pullRight
          style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                marginTop: '12px',
                fontWeight: '500'
              }}
        >
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
