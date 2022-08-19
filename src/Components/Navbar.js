import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ markers }) => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        {markers && (
          <Link className="navbar-item" to="/itinerary">
            Itinerary
          </Link>
        )}
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  markers: PropTypes.bool.isRequired,
};

export default Navbar;
