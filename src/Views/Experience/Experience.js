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
        {/*Work Experience Section*/}
        <div className='workContainer-ExperienceView'>
          <div className='workTitle-ExperienceView'>
            Work Experiences
          </div>
          <div className='workExperiencesContainer-ExperienceView'>
            {/*Peeka Work Experience*/}
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
            {/*TA Work Experience*/}
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
        {/*Skills Section*/}
        <div className='skillsContainer-ExperienceView'>
          <div className='skillsTitle-ExperienceView'>
            Skills
          </div>
          <div className='skillsDetailsContainer-ExperienceView'>
            {/*Front End Development*/}
            <div className='frontEndDevelopmentContainer-ExperienceView'>
              <div className='specificSkillsTitle-ExperienceView'>
                Front End Development
              </div>
              <div className='specificSkillDetails-ExperienceView'>
                I first began front end development when I took UW iSchool's web client
                programming course which I learned HTML, CSS, Javascript, and React. First, we learned
                to build responsive web pages that would be scalable to difference screen sizes. I learned
                to utilize CSS tools such as Bootstrap or Flexbox to achieve responsive screens. For development,
                we learned Javascript with an emphasis on using the React framework to build complex web
                applications. These web apps would interact with tools such as AWS or Google's Firebase to use and
                store data. Projects that directly came from this class include Slack Rebuilt and The Virtual Arcade.
              </div>
            </div>
            {/*Back End Development*/}
            <div className='backEndDevelopmentContainer-ExperienceView'>
              <div className='specificSkillsTitle-ExperienceView'>
                Back End Development
              </div>
              <div className='specificSkillDetails-ExperienceView'>
                My exposure to back end development first began during my server-side programming
                class. There, I learned to create back end services using Google's Go lang and the NodeJS
                framework to create gateways and microservices for an API that I was building. This API was
                designed and built for my Slack Rebuilt project, where we aimed to replicate Slack's features
                such as instant messaging, channels, and user authentication. Along with designing an API, I
                have experience with realtional and NoSQL databases through building an entire database that
                was focused on supporting any Costco-like business operation.
              </div>
            </div>
            {/*Mobile Development*/}
            <div className='mobileDevelopmentContainer-ExperienceView'>
              <div className='specificSkillsTitle-ExperienceView'>
                Mobile Development
              </div>
              <div className='specificSkillDetails-ExperienceView'>
                When it comes to developing mobile applications, I've worked with native code for both
                iOS (Swift) and Android (Kotlin) platforms through courses at UW. A passion project that
                stemmed from my Android class, was EcoSnap, an app that utilized machine learning to
                identify whether or not an item is recyclable. I also have experience with React Native
                and its dual platform capabilities through my internship at Peeka VR. With individual native
                libraries and a cross-platform library in my tool belt, I am well equipped to work with diverse
                teams and projects that utilize one or more of these skills. I have a passion
                for developing mobile applications because of how accessible it is to everyone in the world.
              </div>
            </div>
            {/*General Knowledge*/}
            <div className='generalKnowledgeContainer-ExperienceView'>
              <div className='specificSkillsTitle-ExperienceView'>
                General Knowledge
              </div>
              <div className='specificSkillDetails-ExperienceView'>
                Along with my development skills, I've also dove in specifically on data structures and
                algorithms for one of my CSE courses at UW. Here, I've worked on interesting class projects
                such as implementing a simple search engine. I also have the most experience working in an
                Agile environment where tasks and goals are scheduled in organized sprints to improve production
                speed and iteration work. This tool was introduced to me during my Project Management & Analysis
                course where I learned to work with different frameworks for completing projects. In this class,
                I worked with identifying problems and business goals to plan out a project's lifecycle and to
                optimize team performance towards a particular end goal.
              </div>
            </div>
          </div>
        </div>
        {/*Relevant Courses*/}
        <div className='relevantCoursesContainer-ExperienceView'>
          <div className='relevantCoursesTitle-ExperienceView'>
            Relevant Courses
          </div>
          <div className='relevantCoursesDetail-ExperienceView'>

          </div>
        </div>
        {/*Project Section*/}
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