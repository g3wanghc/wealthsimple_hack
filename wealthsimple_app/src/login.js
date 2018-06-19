import React from 'react';
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
      <div class="pageContainer">
        <div class="loginContainer">
          <h2
            style={{
                textAlign: 'center',
                marginBottom: '40px'
            }}
          > 
            Sign into Squad Gains
          </h2>
          <div id="loginForm">
            <form>
              <FormGroup controlId="formUsername">
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Email address"
                onChange={this.setUsername}
                style={{
                  height: '50px',
                }}
              />
              </FormGroup>
              <FormGroup controlId="formPassword">
              <FormControl
                type="password"
                value={this.state.value}
                placeholder="Password"
                onChange={this.setPassword}
                style={{
                  height: '50px',
                }}
              />
              </FormGroup>
            </form>
            <Button onClick={this.userLogin} 
              style={{
                width: '100px',
                height: '50px',
                marginTop: '25px',
                marginLeft: '250px',
                borderRadius: '25px'
              }}
              bsStyle="primary"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
