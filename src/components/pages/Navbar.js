import React from "react";
import { Link } from "react-router-dom";
import "../style.css";


function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky">
        <Link className="navbar-brand" href="aboutme.html">
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
            <Link className="nav-link active" href="aboutme.html">
              About Me<span className="sr-only"></span>
            </Link>
            <Link className="nav-link" href="portfolio.html">
              Portfolio
            </Link>
            <Link className="nav-link" href="resume.html">
              Resume
            </Link>
            <Link className="nav-link" href="contact.html">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }


  export default NavBar;
