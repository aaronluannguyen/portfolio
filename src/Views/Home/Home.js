import React from 'react';
import './Home.css';
import PortfolioPicture1 from './../../assets/Portfolio1.jpg';
import ToRecentWorkIcon from './../../assets/escalator.svg';
import {PROJECTS, ROUTES} from "../../constants";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";


export default class HomePage extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='outerContainer-HomeView'>
        <div className='container-HomeView'>
          <div className='upperContainer-HomeView'>
            <div className='leftContainer-HomeView'>
              <div className='introductionContainer-HomeView'>
                <div className='introduction-HomeView'>
                  Hello, I'm a Software Engineer that is driven towards creating unique solutions for both
                  mobile and web platforms.
                </div>
              </div>
            </div>
            <div className='rightContainer-HomeView'>
              <img src={PortfolioPicture1} alt="Me" className='myPicture-HomeView'/>
            </div>
          </div>
          <div className='toRecentWork-HomeView'>
            <div className='toRecentWorkContainer-HomeView'>
              <div>
                <img src={ToRecentWorkIcon} alt="Recent Work Icon" className='toRecentWorkIcon-HomeView'/>
              </div>
              <div>
                Recent Work
              </div>
            </div>
          </div>
        </div>
        <div>
          {
            this.props.history.location.pathname === ROUTES.Home ?
              <div ref={this.RecentWork} className="recentWork-ViewController">
                <div className="ProjectCard-ViewController">
                  <ProjectCard history={this.props.history} project={PROJECTS.PeekaVR}/>
                </div>
                <div className="ProjectCard-ViewController">
                  <ProjectCard history={this.props.history} project={PROJECTS.EcoSnap}/>
                </div>
                <div className="ProjectCard-ViewController">
                  <ProjectCard history={this.props.history} project={PROJECTS.ChatApp}/>
                </div>
                <div className="ProjectCard-ViewController">
                  <ProjectCard history={this.props.history} project={PROJECTS.ChatApp}/>
                </div>
              </div>
              :
              null
          }
        </div>
      </div>
    )
  }
}