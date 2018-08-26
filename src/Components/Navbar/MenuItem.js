import React from "react";
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