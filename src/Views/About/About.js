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
            Something that's more interesting than Ani's nonexistent about me paragraph
            since he knows no one cares to read about him.
            Something that's more interesting than Ani's nonexistent about me paragraph
            since he knows no one cares to read about him.
            Something that's more interesting than Ani's nonexistent about me paragraph
            since he knows no one cares to read about him.
            Something that's more interesting than Ani's nonexistent about me paragraph
            since he knows no one cares to read about him.
          </div>
        </div>
      </div>
    )
  }
}