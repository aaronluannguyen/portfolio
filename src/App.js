import React, { Component } from 'react';
import {HashRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import {ROUTES} from './constants'
import './App.css';
import HomeView from './Views/Main/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.Home} component={HomeView} />
          <Redirect to={ROUTES.Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
