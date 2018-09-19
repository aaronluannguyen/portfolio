import React from 'react';
import './ChatAppCard.css';
import Logo from "../../assets/Projects/ChatApp/CardCover.png";


export default class ChatAppCard extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className="container-ChatAppCard">
        {
          this.props.hover ?
            <div className="onHoverContainer-ChatAppCard">
              LOL
            </div>
            :
            <img src={Logo} alt="chat app example" className="logo-ChatAppCard"/>
        }
      </div>
    )
  }
}