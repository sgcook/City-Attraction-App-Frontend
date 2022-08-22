import React from "react";
import { Link } from "react-router-dom";
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
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      attraction_type: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      mobility_level: PropTypes.string.isRequired,
      outside_inside: PropTypes.string.isRequired,
      place_name: PropTypes.string.isRequired,
      postcode: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Navbar;
