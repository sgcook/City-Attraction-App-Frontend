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
        {console.log(markers)}
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
      restaurantType: PropTypes.string,
      cuisine: PropTypes.string,
      mobility: PropTypes.string,
      attractionType: PropTypes.string,
    })
  ).isRequired,
};

export default Navbar;
