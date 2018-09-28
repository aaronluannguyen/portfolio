import React from 'react';
import './PeekaVRCard.css';
import Logo from './../../assets/Projects/PeekaVR/brand.png';
import BulletPoint from "../../Components/BulletPoint/BulletPoint";
import {ROUTES} from "../../constants";
import ViewProject from "../../Components/ViewProject/ViewProject";


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
                <BulletPoint bulletContent="I interned for a startup called Peeka VR this past summer of 2018
                  and helped them develop their MVP through the summer. I built their platform with React Native
                  and Amazon Web Services tools."/>
                <ViewProject history={this.props.history} projectPage={ROUTES.PeekaVR}/>
              </div>
              :
              <img src={Logo} alt="Peeka Logo" className="logo-PeekaVRCard"/>
          }
        </div>
      </div>
    )
  }
}