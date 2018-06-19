import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Login from './login.js'
import Dashboard from './dashboard.js'

const LogInWrapper = () => (
  <div>
    <h2>Log In</h2>
    {this.state.isLoggedIn ? <Dashboard /> : <Login />}
    <Login loginHandler={this.changeLogInState}/>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      username: '',
      password: '',
      isLoggedIn: false 
    };
  }

  changeLogInState(newLogInState){
    this.state.isLoggedIn = newLogInState;
  }

  render() {
    return (
      <Router>
        <div>
          <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
          </head>
          <ul>
            <li><Link to="/">Login</Link></li>
          </ul>

          <hr/>

          {this.state.isLoggedIn ? <Route exact path="/" component={Dashboard}/> : <Route exact path="/" component={Login}/>}
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);