import React from 'react';
import './PeekaVRCard.css';
import Logo from './../../assets/Projects/PeekaVR/brand.png';
import BulletPoint from "../../Components/BulletPoint/BulletPoint";


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
                  <BulletPoint bulletContent="Led development of Peeka's platform for children's virtual reality content using
                  React Native and AWS integration."/>
                  <BulletPoint bulletContent="Worked closely with a Project Manager, design, content, and business teams in an Agile
                  environment with coordinated sprints & deliverables"/>
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