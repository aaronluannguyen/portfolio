import React from 'react';
import './ChatAppCard.css';
import './../../Components/ProjectCard/ProjectCard.css';
import Logo from "../../assets/Projects/ChatApp/CardCover.png";
import backLogo from '../../assets/Projects/ChatApp/backLogo.svg';
import BulletPoint from "../../Components/BulletPoint/BulletPoint";
import ViewProject from "../../Components/ViewProject/ViewProject";
import {ROUTES} from "../../constants";


export default class ChatAppCard extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className="container-ChatAppCard">
        {
          this.props.hover ?
            <div className="onHoverContainer-ChatAppCard">
              <img src={backLogo} alt="Slack Rebuilt Logo" className='backLogo-ChatAppCard'/>
              <div className="PositionTimelineContainer-ChatAppCard">
                <div className="Position-ChatAppCard">
                  Full Stack Developer
                </div>
                <div className="Timeline-ChatAppCard">
                  January 2018 - June 2018
                </div>
              </div>
              <div className="bulletPoint-ProjectCard">
                <BulletPoint bulletContent="I built a web application modeled after Slack's features
              and functionalities (Instant Messaging, User Auth, Channels) throughout my Frontend and
              Server-Side Development courses. For the frontend, I utilized Facebook's
              React library. The backend was developed with Google's Go language, NodeJS microservices,
              Docker Containers, and Digital Ocean Droplets."/>
              </div>
              <ViewProject history={this.props.history} projectPage={ROUTES.ChatApp}/>
            </div>
            :
            <img src={Logo} alt="chat app example" className="logo-ChatAppCard"/>
        }
      </div>
    )
  }
}