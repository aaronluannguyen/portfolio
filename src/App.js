import React, { Component } from 'react';
import {HashRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import {ROUTES} from './constants'
import './App.css';
import MainView from './Views/Main/Main';

class App extends Component {
  render() {
    return (
      <div className='container-app'>
        <Router>
          <Switch>
            <Route exact path={ROUTES.Home} component={(props) => <MainView {...props} page='Home'/>} />
            <Route exact path={ROUTES.Experience} component={(props) => <MainView {...props} page='Experience'/>} />
            <Route exact path={ROUTES.About} component={(props) => <MainView {...props} page='About'/>} />
            <Redirect to={ROUTES.Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
