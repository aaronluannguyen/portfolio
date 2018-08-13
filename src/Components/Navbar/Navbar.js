import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants";
import Media from 'react-media';
import './Navbar.css';
import MenuItem from './MenuItem';
import MenuIcon from './../../assets/menu-options.svg';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-navbar'>
        <div className='contents-navbar'>
          <div className='name-navbar'>Aaron Nguyen</div>
          <Media query='(max-width: 768px)'>
            {
              (matches) => matches ? (
                <img src={require('./../../assets/menu-options.svg')} className='menu-icon'/>
              ) : (
                <div className='menu-navbar'>
                  <MenuItem label='Experience'/>
                  <MenuItem label='About'/>
                  <MenuItem label='Resume'/>
                </div>
              )
            }
          </Media>
        </div>
      </div>
    );
  }
}