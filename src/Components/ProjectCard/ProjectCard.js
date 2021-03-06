import React from 'react';
import './ProjectCard.css';
import {PROJECTS} from "../../constants";
import PeekaVRCard from "../../Projects/PeekaVR/PeekaVRCard";
import TACard from "../../Projects/TA/TACard";
import EcoSnapCard from "../../Projects/EcoSnap/EcoSnapCard";
import ChatAppCard from "../../Projects/ChatApp/ChatAppCard";
import DatabasesCard from "../../Projects/Databases/DatabasesCard";
import CSECard from "../../Projects/CSE/CSECard";
import PMCard from "../../Projects/PM/PMCard";
import VirtualArcadeCard from "../../Projects/VirtualArcade/VirtualArcadeCard";
import KCSheriffActivityCard from "../../Projects/KCSheriffActivity/KCSheriffActivityCard";
import TimifyCard from "../../Projects/Timify/TimifyCard";
import MyoTherapyCard from "../../Projects/MyoTherapy/MyoTherapyCard";


export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);

    this.state = {
      hover: false
    };
  }

  //Lifecycle

  //Helper Functions
  renderProjectCard() {
    switch (this.props.project) {
      case PROJECTS.PeekaVR:
        return <PeekaVRCard history={this.props.history} hover={this.state.hover}/>;
      case PROJECTS.TA:
        return <TACard history={this.props.history} hover={this.state.hover}/>;
      case PROJECTS.EcoSnap:
        return <EcoSnapCard history={this.props.history} hover={this.state.hover}/>;
      case PROJECTS.ChatApp:
        return <ChatAppCard history={this.props.history} hover={this.state.hover}/>;
      case PROJECTS.Databases:
        return <DatabasesCard history={this.props.history} hover={this.state.hover}/>;
      case PROJECTS.CSE:
        return <CSECard history={this.props.history} hover={this.state.hover}/>;
      case PROJECTS.PM:
        return <PMCard history={this.props.history} hover={this.state.hover}/>;
      case PROJECTS.VirtualArcade:
        return <VirtualArcadeCard history={this.props.history} hover={this.state.hover}/>;
      case PROJECTS.KCSheriffActivity:
        return <KCSheriffActivityCard history={this.props.history} hover={this.state.hover}/>;
      case PROJECTS.Timify:
        return <TimifyCard history={this.props.history} hover={this.state.hover}/>;
      case PROJECTS.MyoTherapy:
        return <MyoTherapyCard history={this.props.history} hover={this.state.hover}/>;
      default:
        return null;
    }
  }
  handleHover() {
    let hoverStatus = this.state.hover;
    this.setState({hover: !hoverStatus})
  }

  render() {
    return (
      <div className="container-ProjectCard"
           onMouseEnter={this.handleHover}
           onMouseLeave={this.handleHover}
           >
        {this.renderProjectCard()}
      </div>
    )
  }
}