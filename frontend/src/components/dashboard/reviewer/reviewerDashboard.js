import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import {Link} from "react-router-dom";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">

                <span style={{ fontFamily: "monospace" }}>REVIEWER WELCOME</span>  👏
              </p>
            </h4>
            {/*<button*/}
            {/*  style={{*/}
            {/*    width: "150px",*/}
            {/*    borderRadius: "3px",*/}
            {/*    letterSpacing: "1.5px",*/}
            {/*    marginTop: "1rem"*/}
            {/*  }}*/}
            {/*  onClick={this.onLogoutClick}*/}
            {/*  className="btn btn-large waves-effect waves-light hoverable blue accent-3"*/}
            {/*>*/}
            {/*  Logout*/}
            {/*</button>*/}
          </div>
        </div>

        <div className="navbar-fixed">
          <nav className="z-depth-0">
            <div className="nav-wrapper white">

              <div className="topnav" id="myTopnav">
                <Link to="/reviewer/dashboard" >Reviewer Home</Link>
                <Link to="/WorkshopView">View Workshop</Link>
                <Link to="/ResearchView">View Research</Link>
              </div>
            </div>
          </nav>
        </div>

      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
