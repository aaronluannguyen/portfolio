import React from 'react';
import './EcoSnapCard.css';
import Logo from "../../assets/Projects/PeekaVR/brand.png";


export default class EcoSnapCard extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className="container-EcoSnapCard">
        <div className="card-EcoSnapCard">
          {
            this.props.hover ?
              <div className="onHoverContainer-EcoSnapCard">
                LOL
              </div>
              :
              null
          }
        </div>
      </div>
    )
  }
}