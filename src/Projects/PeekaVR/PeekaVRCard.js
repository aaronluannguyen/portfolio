import React from 'react';
import './PeekaVRCard.css';
import Logo from './../../assets/Projects/PeekaVR/brand.png';


export default class PeekaVRCard extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className="container-PeekaVRCard">
        <div className="card-PeekaVRCard">
          {
            this.props.hover ?
              <div className="onHoverContainer-PeekaVRCard">
                <img src={Logo} alt="Logo on Hover" className="onHoverLogo-PeekaVRCard"/>
                <div className="PositionTimelineContainer-PeekaVRCard">
                  <div className="Position-PeekaVRCard">
                    SDE Intern
                  </div>
                  <div className="Timeline-PeekaVRCard">
                    June 2018 - Present
                  </div>
                </div>
                <div className="description-PeekaVRCard">
                  • Point 1
                  <br/>
                  <br/>
                  • Point 2
                  <br/>
                  <br/>
                  • Point 3
                </div>
              </div>
              :
              <img src={Logo} alt="Peeka Logo"/>
          }
        </div>
      </div>
    )
  }
}