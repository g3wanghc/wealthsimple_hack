import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login.js'
import Dashboard from './Dashboard.js'
import Profile from './profile.js'
import Settings from './settings.js'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      username: '',
      password: '',
      isLoggedIn: false,
      currentPage: 'dashboard' 
    };

    this.changeLogInState = this.changeLogInState.bind(this);
    this.changeCurrentPageState = this.changeCurrentPageState.bind(this);
  }

  changeLogInState(newLogInState){
    this.setState({isLoggedIn: newLogInState});
  }

  changeCurrentPageState(newState) {
    this.setState({currentPage: newState});
  }

  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
        </head>
        {this.state.isLoggedIn ? null : <Login loginHandler={this.changeLogInState}/>}
        {this.state.currentPage === 'dashboard' && this.state.isLoggedIn ? <Dashboard loginHandler={this.changeLogInState} pageHandler={this.changeCurrentPageState}/> : null }
        {this.state.currentPage === 'profile' && this.state.isLoggedIn ? <Profile loginHandler={this.changeLogInState} pageHandler={this.changeCurrentPageState}/> : null }
        {this.state.currentPage === 'settings' && this.state.isLoggedIn ? <Settings loginHandler={this.changeLogInState} pageHandler={this.changeCurrentPageState}/> : null }
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
