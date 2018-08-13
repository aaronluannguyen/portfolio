import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants";
import './MenuItem.css';

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-MenuItem'>
        <div className='item-name'>{this.props.label}</div>
      </div>
    );
  }
}