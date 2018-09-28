import React from 'react';
import './Home.css';
import PortfolioPicture1 from './../../assets/Portfolio1.jpg';
import ToRecentWorkIcon from './../../assets/escalator.svg';


export default class HomePage extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
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
    )
  }
}