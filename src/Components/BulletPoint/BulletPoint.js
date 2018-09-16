import React from 'react';
import './BulletPoint.css';


export default class BulletPoint extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className="container-BulletPoint">
        <div className="bullet-BulletPoint">
          •
        </div>
        <div className="bulletContent-BulletPoint">
          {this.props.bulletContent}
        </div>
      </div>
    )
  }
}