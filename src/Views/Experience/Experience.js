import React from 'react';
import './Experience.css';
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import {PROJECTS} from "../../constants";
import BulletPoint from "../../Components/BulletPoint/BulletPoint";


export default class ExperiencePage extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-ExperienceView'>
        <div className='workContainer-ExperienceView'>
          <div className='workTitle-ExperienceView'>
            Work Experiences
          </div>
          <div className='workExperiencesContainer-ExperienceView'>
            <div className='peekaContainer-ExperienceView'>
              <div className='peekaTitle-ExperienceView'>
                Peeka VR | Software Engineer Intern
              </div>
              <div className='peekaTimeline-ExperienceView'>
                June 2018 - Present
              </div>
              <div className='bulletPointWork-ExperienceView'>
                <BulletPoint bulletContent="Led development in building Peeka's platform for children's
              virtual reality content for both iOS and Android platforms"/>
              </div>
              <div className='bulletPointWork-ExperienceView'>
                <BulletPoint bulletContent="Designed and built the back end solution that interfaces w/ AWS for
                user authentication, playable VR content on runtime, payment
                transactions, and Peeka's virtual currency system"/>
              </div>
              <div className='bulletPointWork-ExperienceView'>
                <BulletPoint bulletContent="Utilized React Native's robustness to silmutaneously develop both iOS
                and Android applications while maintaining progress for release date"/>
              </div>
              <div className='bulletPointWork-ExperienceView'>
                <BulletPoint bulletContent="Worked closely with a project manager, design team, content team,
                and the business team to determine MVP for launch. Worked primarily
                in an Agile environment w/ coordinated sprints & deliverables."/>
              </div>
            </div>
            <div className='taContainer-ExperienceView'>
              <div className='taTitle-ExperienceView'>
                UW iSchool | Teaching Assistant
              </div>
              <div className='taTimeline-ExperienceView'>
                September 2017 - Present
              </div>
              <div className='bulletPointWork-ExperienceView'>
                <BulletPoint bulletContent="Teach undergraduate students web development technologies
                (HTML, CSS), design process (Design Thinking, User Testing,
                Wireframing, Prototyping), relational databases (DB Schemas, SQL,
                Data Management), and teamwork skills that prepares them for
                more in depth classes in the Informatics major. "/>
              </div>
              <div className='bulletPointWork-ExperienceView'>
                <BulletPoint bulletContent="Responsibilities includes lecture presentations, programming
                demonstrations, and grading class assignments and projects."/>
              </div>
            </div>
          </div>
        </div>
        <div className='skillsContainer-ExperienceView'>
          <div className='skillsTitle-ExperienceView'>
            Skills
          </div>
          <div className='skillsDetailsContainer-ExperienceView'>
            <div className='developmentContainer-ExperienceView'>
              <div className='developmentTitle-ExperienceView'>
                Development
              </div>
              <div className='developmentDetails-ExperienceView'>

              </div>
            </div>
            <div className='relevantCoursesContainer-ExperienceView'>
              <div className='relevantCoursesTitle-ExperienceView'>
                Relevant Courses
              </div>
              <div className='relevantCoursesDetail-ExperienceView'>

              </div>
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
          </div>
        </div>
      </div>
    )
  }
}