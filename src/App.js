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
            <Route exact path={ROUTES.Home} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.Experience} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.About} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.PeekaVR} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.TA} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.EcoSnap} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.ChatApp} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.Databases} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.CSE} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.PM} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.VirtualArcade} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.KCSheriffActivity} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.Timify} component={(props) => <MainView {...props} />} />
            <Route exact path={ROUTES.MyoTherapy} component={(props) => <MainView {...props} />} />
            <Redirect to={ROUTES.Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
