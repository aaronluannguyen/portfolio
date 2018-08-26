import React from 'react';
import './ViewController.css';
import HomePage from './../Home/Home';
import ExperiencePage from './../Experience/Experience';
import AboutPage from './../About/About';
import {ROUTES} from "../../constants";


export default class ViewController extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

    }
  }

  //Lifecycle

  //Helper Functions
  renderContentPage() {
    let route = this.props.history.location.pathname;
    switch(route) {
      case ROUTES.Home:
        return <HomePage/>;
      case ROUTES.Experience:
        return <ExperiencePage/>;
      case ROUTES.About:
        return <AboutPage/>;
      default:
        return <HomePage/>;
    }
  }

  render() {
    return (
      <div className='container-ViewController'>
        <div className='content-ViewController'>
          {this.renderContentPage()}
        </div>
        {/*<div className='footer-ViewController'>*/}
          {/*<Footer/>*/}
        {/*</div>*/}
      </div>
    )
  }
}