import "../Layouts/Landingpage.css";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <section className="landing">
        <div className="dark-overlay">
          <div class="set">
            <div className="circle">
              <p className="circle-content">HTML</p>
            </div>
            <div className="circle">
              <p className="circle-content">JaVASCRIPT</p>
            </div>
            <div className="circle">
              <p className="circle-content">CSS</p>
            </div>
            <div className="circle">
              <p className="circle-content">CSS</p>
            </div>
            <div className="circle">
              <p className="circle-content">PYTHON</p>
            </div>
            <div className="circle">
              <p className="circle-content">REACT.js</p>
            </div>
            <div className="circle">
              <p className="circle-content">JAVA</p>
            </div>

            <div className="set set2">
              <div className="circle">
                <p className="circle-content">NODE.JS</p>
              </div>
              <div className="circle">
                <p className="circle-content">REACT.js</p>
              </div>
              <div className="circle">
                <p className="circle-content">C++</p>
              </div>
            </div>

            <div className="set set3">
              <div className="circle">
                <p className="circle-content">C</p>
              </div>
              <div className="circle">
                <p className="circle-content">JAVA</p>
              </div>
              <div className="circle">
                <p className="circle-content">JaVASCRIPT</p>
              </div>
              <div className="circle">
                <p className="circle-content">PYTHON</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="landing-inner">
        <h1 className="x-large">Developer Connector</h1>
        <p className="lead">
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </p>
        <div className="buttons">
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-light">
            Login
          </Link>
        </div>
        <h2>❤ by Deepanshu Tyagi</h2>
      </div>
    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
