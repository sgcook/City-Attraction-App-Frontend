import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/itinerary">
          Itinerary
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
