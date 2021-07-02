import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import LoginStatus from './LoginStatus'

class Navbar extends Component {

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">

            <div class="topnav" id="myTopnav">
              <Link to="/" >Home</Link>
              <Link to="/Keynotes" >Keynotes</Link>
              <Link to="/register">Registrations</Link>
              <Link to="/programs" >Program</Link>
              <Link to="/research_papers" >Research Papers</Link>
              <Link to="/workshops" >Workshops</Link>
              <Link to="/downloads" >Downloads</Link>
              <div class="topnav-right">
                <LoginStatus />

              </div>
              <a href="javascript:void(0);" class="icon" onClick="myFunction()">
                <i class="fa fa-bars"></i>
              </a>

            </div>


          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
