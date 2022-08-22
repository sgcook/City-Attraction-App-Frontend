/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import qs from "qs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import EatDrinkForm from "./EatDrinkForm";
import AttractionsForm from "./AttractionsForm";
import logo from "./CityTrek-1.png";

const Home = ({ setMarkers }) => {
  const [eatingDrinking, setEatingDrinking] = useState(false);
  const [attractions, setAttractions] = useState(false);
  const [query, setQuery] = useState({});
  const toggleSelection = (e) => {
    if (e.target.name === "attractions") setAttractions((prev) => !prev);
    if (e.target.name === "eatingdrinking") setEatingDrinking((prev) => !prev);
  };

  const getPlaces = () => {
    // const baseUrl = dev ? "localhost:3000" : "actualURL";
    const data = "";
    const config = {
      method: "get",
      url: `http://localhost:3001/pathway`,
      headers: {},
      data,
      params: {
        city: query.city,
        mobility: query.mobility,
        restaurantType: query.restaurantType,
        cuisine: query.cuisine,
        attractionType: query.attractionType,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { encode: false });
      },
    };

    return axios(config)
      .then((response) => {
        console.log(response.data);
        setMarkers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home">
      <div className="home-header">
        <img src={logo} alt="CityTreklogo" height="120" />
      </div>
      <p>We'll plan your walking tour of the city. Where are you going?</p>
      <form className="home-form">
        <label htmlFor="home-city" className="home-city">
          <p>I'm going to...</p>
          <select
            className="select"
            defaultValue="DEFAULT"
            onChange={(e) => setQuery({ ...query, city: e.target.value })}
          >
            <option value="DEFAULT" disabled>
              Choose a city
            </option>
            <option value="Birmingham">Birmingham</option>
            <option value="Glasgow">Glasgow</option>
            <option value="Liverpool">Liverpool</option>
            <option value="London">London</option>
            <option value="Manchester">Manchester</option>
          </select>
        </label>
        <label htmlFor="walking" className="walking">
          <p>How much walking do you want to do?</p>
          <select
            className="select"
            defaultValue="DEFAULT"
            onChange={(e) => setQuery({ ...query, mobility: e.target.value })}
          >
            <option value="DEFAULT" disabled>
              Walking Length
            </option>
            <option value="Minimum">Minimum</option>
            <option value="Moderate">Moderate</option>
            <option value="Plenty">Plenty</option>
          </select>
        </label>
        <label htmlFor="interest-in" className="interested-in">
          <p>I'm interested in...</p>
          <label htmlFor="eatingdrinking" className="eatingdrinking">
            Eating/Drinking
            <input
              type="checkbox"
              id="eatingdrinking"
              value={eatingDrinking}
              checked={eatingDrinking}
              name="eatingdrinking"
              onChange={toggleSelection}
            />
          </label>
          <br />
          <label htmlFor="attractions" className="attractions">
            Attractions
            <input
              type="checkbox"
              id="attractions"
              value={attractions}
              checked={attractions}
              name="attractions"
              onChange={toggleSelection}
            />
          </label>
          <br />
        </label>
        {console.log(query)}
        {eatingDrinking && <EatDrinkForm query={query} setQuery={setQuery} />}
        {attractions && <AttractionsForm query={query} setQuery={setQuery} />}
      </form>
      <Link className="navbar-item" to="/itinerary">
        <button
          type="submit"
          onClick={() => {
            getPlaces();
          }}
        >
          Plan my day!
        </button>
      </Link>
    </div>
  );
};

Home.propTypes = {
  setMarkers: PropTypes.func.isRequired,
};

export default Home;
