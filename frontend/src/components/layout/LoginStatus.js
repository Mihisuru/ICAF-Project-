import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class LoginStatus extends Component {
  
  render() {
    return (
      <div>
        {this.props.auth.isAuthenticated==1 ?  <div><Link to="/dashboard">Account</Link><Link to="/logout">Logout</Link></div>: <Link to="/login"><a href="#search">Login</a></Link>}
      </div>
    );
  }
}

LoginStatus.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginStatus);
