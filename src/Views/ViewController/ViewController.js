import React from 'react';
import './ViewController.css';
import HomePage from './../Home/Home';
import ExperiencePage from './../Experience/Experience';
import AboutPage from './../About/About';
import {ROUTES} from "../../constants";
import PeekaVR from "../../Projects/PeekaVR/PeekaVR";
import TA from "../../Projects/TA/TA";
import EcoSnap from "../../Projects/EcoSnap/EcoSnap";
import ChatApp from "../../Projects/ChatApp/ChatApp";
import Databases from "../../Projects/Databases/Databases";
import CSE from "../../Projects/CSE/CSE";
import PM from "../../Projects/PM/PM";
import VirtualArcade from "../../Projects/VirtualArcade/VirtualArcade";
import KCSheriffActivity from "../../Projects/KCSheriffActivity/KCSheriffActivity";
import Timify from "../../Projects/Timify/Timify";
import MyoTherapy from "../../Projects/MyoTherapy/MyoTherapy";


export default class ViewController extends React.Component {
  //Lifecycle

  //Helper Functions

  renderContentPage() {
    let route = this.props.history.location.pathname;
    switch(route) {
      case ROUTES.Home:
        return <HomePage history={this.props.history}/>;
      case ROUTES.Experience:
        return <ExperiencePage/>;
      case ROUTES.About:
        return <AboutPage/>;
      case ROUTES.PeekaVR:
        return <PeekaVR/>;
      case ROUTES.TA:
        return <TA/>;
      case ROUTES.EcoSnap:
        return <EcoSnap/>;
      case ROUTES.ChatApp:
        return <ChatApp/>;
      case ROUTES.Databases:
        return <Databases/>;
      case ROUTES.CSE:
        return <CSE/>;
      case ROUTES.PM:
        return <PM/>;
      case ROUTES.VirtualArcade:
        return <VirtualArcade/>;
      case ROUTES.KCSheriffActivity:
        return <KCSheriffActivity/>;
      case ROUTES.Timify:
        return <Timify/>;
      case ROUTES.MyoTherapy:
        return <MyoTherapy/>;
      default:
        return <HomePage history={this.props.history}/>;
    }
  }

  render() {
    return (
      <div className='container-ViewController'>
        <div className='content-ViewController'>
          {this.renderContentPage()}
        </div>
      </div>
    )
  }
}