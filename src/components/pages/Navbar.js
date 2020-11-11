import React from "react";
import { Link } from "react-router-dom";
import "../style.css";


function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky">
        <Link className="navbar-brand" to="AboutMe">
          Shunpin Tseng
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="AboutMe">
              About Me<span className="sr-only"></span>
            </Link>
            <Link className="nav-link" to="/Portfolio">
              Portfolio
            </Link>
            <Link className="nav-link" to="/Resume">
              Resume
            </Link>
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }


  export default NavBar;
