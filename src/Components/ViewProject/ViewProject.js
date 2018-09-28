import React from 'react';
import './ViewProject.css';
import GoIcon from './../../assets/go-to-location.svg';

export default class ViewProject extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  //Lifecycle

  //Helper Functions
  handleClick() {
    this.props.history.push(this.props.projectPage);
  }

  render() {
    return (
      <div className='container-ViewProject' onClick={this.handleClick}>
        View Project
        <img src={GoIcon} alt="Go to Project Icon" className='goIcon-ViewProject'/>
      </div>
    )
  }
}