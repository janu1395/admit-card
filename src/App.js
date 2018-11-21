import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LoginPage from './container/LoginPage';
import FormPage from './container/FormPage';


// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
             <Route exact path="/" component={LoginPage}/>
            <Route exact path="/registerform" component={FormPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
