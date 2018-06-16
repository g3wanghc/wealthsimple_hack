import React from 'react';
import './index.css';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import Helpers from './helpers.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '' };

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }

  setUsername(e) {
    this.setState({ username: e.target.value });
  }

  setPassword(e) {
    this.setState({ password: e.target.value });
  }

  userLogin() {
      console.log("username", this.state.username);
      console.log("password", this.state.password);
      this.props.loginHandler(true);
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup
            controlId="formUsername"
          >
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.setUsername}
          />
          </FormGroup>
          <FormGroup
            controlId="formPassword"
          >
          <FormControl
            type="password"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.setPassword}
          />
          </FormGroup>
        </form>
        <Button onClick={this.userLogin}>
          Log In!
        </Button>
      </div>
    );
  }
}

export default Login;
