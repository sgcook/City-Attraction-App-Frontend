/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import qs from "qs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import EatDrinkForm from "./EatDrinkForm";
import AttractionsForm from "./AttractionsForm";

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
        restaurantType: query.restaurantType
          .map((n, index) => `restaurants[${index}]=${n}`)
          .join("&"),
        cuisine: query.cuisine
          .map((n, index) => `restaurants[${index}]=${n}`)
          .join("&"),
        attractionType: query.attractionType
          .map((n, index) => `restaurants[${index}]=${n}`)
          .join("&"),
      },
      // paramsSerializer: (params) => {
      //   return qs.stringify(params);
      // },
    };

    return axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="home">
      <div className="home-header">
        <h1>CityWalk</h1>
      </div>
      <p>We'll plan your walking tour of the city. Where are you going?</p>
      <form className="home-form">
        <label htmlFor="home-city">
          <p>I'm going to...</p>
          <select
            className="select"
            defaultValue="DEFAULT"
            onChange={(e) => setQuery({ ...query, city: e.target.value })}
          >
            <option value="DEFAULT" disabled>
              Choose a city
            </option>
            <option value="birmingham">Birmingham</option>
            <option value="glasgow">Glasgow</option>
            <option value="liverpool">Liverpool</option>
            <option value="london">London</option>
            <option value="manchester">Manchester</option>
          </select>
        </label>
        <p>How much walking do you want to do?</p>
        <label htmlFor="walking">
          <select
            className="select"
            defaultValue="DEFAULT"
            onChange={(e) => setQuery({ ...query, mobility: e.target.value })}
          >
            <option value="DEFAULT" disabled>
              Walking Length
            </option>
            <option value="minimum">Minimum</option>
            <option value="moderate">Moderate</option>
            <option value="plenty">Plenty</option>
          </select>
        </label>
        <label htmlFor="interest-in" className="checkbox">
          <p>I'm interested in...</p>
          Eating/Drinking
          <input
            type="checkbox"
            id="eatingdrinking"
            value={eatingDrinking}
            checked={eatingDrinking}
            name="eatingdrinking"
            onChange={toggleSelection}
          />
          <br />
          Attractions
          <input
            type="checkbox"
            id="attractions"
            value={attractions}
            checked={attractions}
            name="attractions"
            onChange={toggleSelection}
          />
          <br />
        </label>
        {eatingDrinking && <EatDrinkForm query={query} setQuery={setQuery} />}
        {attractions && <AttractionsForm query={query} setQuery={setQuery} />}
        <Link className="navbar-item" to="/itinerary">
          <button
            type="submit"
            onClick={() => {
              /* Will have to change to be response from backend */
              console.log(query);
              setMarkers(true);
              getPlaces();
            }}
          >
            Plan my day!
          </button>
        </Link>
      </form>
    </div>
  );
};

Home.propTypes = {
  setMarkers: PropTypes.func.isRequired,
};

export default Home;
