import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login.js'
import Dashboard from './Dashboard.js'

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
      isLoggedIn: false 
    };

    this.changeLogInState = this.changeLogInState.bind(this);
  }

  changeLogInState(newLogInState){
    this.setState({isLoggedIn: newLogInState});
  }

  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
        </head>
        {this.state.isLoggedIn ? <Dashboard loginHandler={this.changeLogInState}/> : <Login loginHandler={this.changeLogInState}/>}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
