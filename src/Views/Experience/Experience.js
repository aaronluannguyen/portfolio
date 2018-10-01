import React from 'react';
import './Experience.css';
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import {PROJECTS} from "../../constants";


export default class ExperiencePage extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-ExperienceView'>
        <div className='skillsContainer-ExperienceView'>
          <div className='skillsTitle-ExperienceView'>
            What can I do?
          </div>
          <div className='skillsDetailsContainer-ExperienceView'>
            <div>

            </div>
          </div>
        </div>
        <div className='projectSection-ExperienceView'>
          <div className='projectTitle-ExperienceView'>
            Projects
          </div>
          <div className='projects-ExperienceView'>
            <div className="ProjectCard-ExperienceView">
              <ProjectCard history={this.props.history} project={PROJECTS.PeekaVR}/>
            </div>
            <div className="ProjectCard-ExperienceView">
              <ProjectCard history={this.props.history} project={PROJECTS.EcoSnap}/>
            </div>
            <div className="ProjectCard-ExperienceView">
              <ProjectCard history={this.props.history} project={PROJECTS.ChatApp}/>
            </div>
            <div className="ProjectCard-ExperienceView">
              <ProjectCard history={this.props.history} project={PROJECTS.Databases}/>
            </div>
            <div className="ProjectCard-ExperienceView">
              <ProjectCard history={this.props.history} project={PROJECTS.Databases}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}