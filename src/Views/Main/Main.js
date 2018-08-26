import React from "react";
import './Main.css';
import Navbar from './../../Components/Navbar/Navbar';
import ViewController from './../ViewController/ViewController';
import Footer from "../../Components/Footer/Footer";


export default class MainView extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-MainView'>
        <div className='navbar-MainView'>
          <Navbar history={this.props.history}/>
        </div>
        <div className='viewController-MainView'>
          <ViewController history={this.props.history} page={this.props.page}/>
        </div>
        <Footer/>
      </div>
    );
  }
}