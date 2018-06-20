import React from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import Helpers from './helpers.js';
import Logo from './static/logo.png';

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
          <img src={Logo}
              style={{
                width: '200px',
                height: '200px',
                marginBottom: '50px',
                marginLeft: '200px'
              }}
            />

          <div id="loginForm">
            <form>
              <FormGroup controlId="formUsername">
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Email address"
                onChange={this.setUsername}
                style={{
                  fontSize: '16px',
                  height: '60px',
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
                  fontSize: '16px',
                  height: '60px',
                }}
              />
              </FormGroup>
            </form>
            <Button onClick={this.userLogin} 
              style={{
                width: '100px',
                height: '60px',
                marginTop: '25px',
                marginLeft: '250px',
                borderRadius: '25px',
                fontSize: '18px',
                backgroundImage: 'none',
                backgroundColor: 'black',
              }}
              bsStyle="primary">
              Sign In
            </Button>
            <div style={{
                marginTop: '50px',
                marginLeft: '225px',
                fontSize: '18px',
              }}>
              <a href="/"> Create an account </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
