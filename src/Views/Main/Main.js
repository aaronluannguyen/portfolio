import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants";
import Navbar from '../../Components/Navbar/Navbar';

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  //Lifecycle

  //Helper Functions

  render() {
    return (
      <div className='container-MainView'>
        <Navbar/>
      </div>
    );
  }
}