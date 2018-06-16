import React from 'react';
import './index.css';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './Navbar.js'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CustomNavbar loginHandler={this.props.loginHandler}/>
        <h3 className="dashboard-wrapper">Welcome John Smith!</h3>
        <div className="container">
          <p className="dashboard-left">Insert left side stats here</p>
          <p className="dashboard-right">Insert right side stats here</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
