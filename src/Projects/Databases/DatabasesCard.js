import React from 'react';
import './DatabasesCard.css';
import './../../Components/ProjectCard/ProjectCard.css';
import ViewProject from "../../Components/ViewProject/ViewProject";
import {ROUTES} from "../../constants";
import FrontLogo from "../../assets/Projects/Databases/frontLogo.svg";
import BackLogo from './../../assets/Projects/Databases/backLogo.svg';
import BulletPoint from "../../Components/BulletPoint/BulletPoint";



export default class DatabasesCard extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-DatabasesCard'>
        <div className='card-DatabasesCard'>
          {
            this.props.hover ?
              <div className="onHoverContainer-DatabasesCard">
                <img src={BackLogo} alt="Databases Logo" className='backLogo-DatabasesCard'/>
                <div className="PositionTimelineContainer-DatabasesCard">
                  <div className="Position-DatabasesCard">
                    Database Engineer
                  </div>
                  <div className="Timeline-DatabasesCard">
                    March 2018 - May 2018
                  </div>
                </div>
                <div className='bulletPoint-ProjectCard'>
                  <BulletPoint bulletContent="My team and I designed and built a SQL database for businesses
                similar to Costco. We iterated and designed a database schema that Costco-like companies
                could use to run their business optimally and securely. Then, we implemented the SQL database
                with Microsoft SQL Server and made sure to have proper queries, business rules, functions, etc."/>
                </div>
                <ViewProject history={this.props.history} projectPage={ROUTES.Databases}/>
              </div>
              :
              <img src={FrontLogo} alt="EcoSnap Logo" className='logo-DatabasesCard'/>
          }
        </div>
      </div>
    )
  }
}