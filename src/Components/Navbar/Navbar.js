import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants";
import Media from 'react-media';
import './Navbar.css';
import HamburgerMenu from './../../assets/menu-options.svg'
import MenuItem from './MenuItem';
import MenuIcon from './MenuIcon';
import {openInNewTab} from "../../Utility/OpenInNewTab";
import Resume from './../../assets/resume.pdf';


export default class Navbar extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-navbar'>
        <Media query='(max-width: 768px)'>
          {
            (matches) => matches ? (
              <div className='contents-navbar'>
                <div className='name-navbar'>Aaron Nguyen</div>
                <img src={HamburgerMenu} alt='Menu Icon' className='menu-icon-navbar'/>
              </div>
            ) : (
              <div className='contents-navbar'>
                <div className='name-navbar'>Aaron Nguyen</div>
                <div className='menu-navbar'>
                  <MenuItem label='Home' onClick={() => this.props.history.push(ROUTES.Home)}/>
                  <MenuItem label='Experience' onClick={() => this.props.history.push(ROUTES.Experience)}/>
                  <MenuItem label='About' onClick={() => this.props.history.push(ROUTES.About)}/>
                  <MenuItem label='Resume' onClick={() => openInNewTab(Resume + '#view=Fit')}/>
                </div>
                <div className='outside-links-navbar'>
                  <MenuIcon
                    label='Github'
                    linkTo='https://github.com/aaronluannguyen'
                  />
                  <MenuIcon
                    label='LinkedIn'
                    linkTo='https://www.linkedin.com/in/aaronluannguyen/'
                  />
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}