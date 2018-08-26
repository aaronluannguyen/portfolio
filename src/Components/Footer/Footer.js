import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-footer'>
        <div className='line1-footer'>
          Built from scratch w/ React
        </div>
        <div className='line2-footer'>
          © 2018 · Aaron Nguyen
        </div>
      </div>
    )
  }
}