import React from 'react';
import './EcoSnapCard.css';
import Logo from "../../assets/Projects/EcoSnap/frontLogo.svg";
import BackLogo from '../../assets/Projects/EcoSnap/backLogo.svg';
import BulletPoint from "../../Components/BulletPoint/BulletPoint";
import {ROUTES} from "../../constants";
import ViewProject from "../../Components/ViewProject/ViewProject";


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
                <img src={BackLogo} alt="EcoSnap Logo" className='backLogo-EcoSnapCard'/>
                <div className="PositionTimelineContainer-EcoSnapCard">
                  <div className="Position-EcoSnapCard">
                    Full Stack Developer
                  </div>
                  <div className="Timeline-EcoSnapCard">
                    May 2018 - June 2018
                  </div>
                </div>
                <BulletPoint bulletContent="My team and I built an Android application with Kotlin that
                utilized machine learning to help users determine whether an item was recyclable. My
                responsibilities included building multiple features and the backend system for our app."/>
                <ViewProject history={this.props.history} projectPage={ROUTES.EcoSnap}/>
              </div>
              :
              <img src={Logo} alt="EcoSnap Logo" className='logo-EcoSnapCard'/>
          }
        </div>
      </div>
    )
  }
}