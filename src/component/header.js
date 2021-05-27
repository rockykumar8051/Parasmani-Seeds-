import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light header  ">
        <div className="container">
          <Link to="/" className="navbar-brand logo">
            <img src="img/logo.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/product" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact us
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
