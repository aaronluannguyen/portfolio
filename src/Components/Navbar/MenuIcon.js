import React from 'react';
import './MenuIcon.css';
import {openInNewTab} from "./../../Utility/OpenInNewTab";
import GithubLogo from './../../assets/github-logo.svg';
import LinkedInLogo from './../../assets/linkedin-logo.svg';


export default class MenuIcon extends React.Component {
  //Lifecycle

  //Helper Functions
  getIconSrc(label) {
    if (label === 'Github') {
      return GithubLogo;
    } else if (label === 'LinkedIn') {
      return LinkedInLogo;
    }
  }

  render() {
    return (
      <img
        src={(this.getIconSrc(this.props.label))}
        alt={this.props.label}
        className='menu-icon-MenuIcon'
        onClick={() => openInNewTab(this.props.linkTo)}
      />
    )
  }
}