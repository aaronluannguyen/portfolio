import React from 'react';
import './About.css';
import MyPicture from "../../assets/mypicture.jpeg";


export default class AboutPage extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-AboutView'>
        <div className='myPictureContainer-AboutView'>
          <img src={MyPicture} alt="Me" className='myPicture-AboutView'/>
        </div>
        <div className='nameAndAboutContainer-AboutView'>
          <div className='name-AboutView'>
            Aaron Nguyen
          </div>
          <div className='aboutParagraph-AboutView'>
            Hello! I'm currently a Senior Informatics student at the University of Washington - Seattle.
            Here at the iSchool, I have chosen to take a route that focuses on Software Development.
            I find myself driven and drawn towards developing technologies on both web and mobile platforms.
            In the long run, I hope to be a part of a team that develops new and upcoming applications or
            tools for people.
            <br/>
            <br/>
            When I'm not working, you can find me either creating short travel videos, building computers
            from scratch, playing video games with friends, reading comic books, exercising or playing the piano! I also love
            to keep track of professional baseball or basketball teams and their stats for fantasy leagues.
          </div>
        </div>
      </div>
    )
  }
}