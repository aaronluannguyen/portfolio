import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants";
import './Main.css';
import Navbar from './../../Components/Navbar/Navbar';
import ViewController from './../ViewController/ViewController';
import Footer from './../../Components/Footer/Footer';


export default class MainView extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-MainView'>
        <Navbar history={this.props.history}/>
        <ViewController history={this.props.history} page={this.props.page}/>
        <Footer/>
      </div>
    );
  }
}