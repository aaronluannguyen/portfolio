import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants";
import './MenuItem.css';

export default class MenuItem extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-MenuItem'>
        <div className='item-name' onClick={this.props.onClick}>{this.props.label}</div>
      </div>
    );
  }
}