/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import qs from "qs";
import PropTypes from "prop-types";
import axios from "axios";
import EatDrinkForm from "./EatDrinkForm";
import AttractionsForm from "./AttractionsForm";
import logo1 from "./CityTrek-1.png";
import logo2 from "./CityTrek-2.png";

const Home = ({ setMarkers }) => {
  const initialAttraction = {
    museumsGalleries: false,
    parksGardens: false,
    landmarksMonuments: false,
  };
  const initalEatingDrinking = {
    restaurant: false,
    cafe: false,
    pubsBar: false,
  };
  const initialCuisine = {
    asian: false,
    britishAmerican: false,
    indian: false,
    european: false,
    vegetarianVegan: false,
    middleEastern: false,
    other: false,
  };

  const navigate = useNavigate();
  const [eatingDrinking, setEatingDrinking] = useState(false);
  const [attractions, setAttractions] = useState(false);
  const [query, setQuery] = useState({});
  const [attractionBoxes, setAttractionBoxes] = useState(initialAttraction);
  const [eatingDrinkingBoxes, setEatingDrinkingBoxes] =
    useState(initalEatingDrinking);
  const [cuisineBoxes, setCuisineBoxes] = useState(initialCuisine);

  const toggleSelection = (e) => {
    if (e.target.name === "attractions") setAttractions((prev) => !prev);
    if (e.target.name === "eatingdrinking") setEatingDrinking((prev) => !prev);
  };

  useEffect(() => {
    const checkedAttractions = Object.keys(attractionBoxes).filter(
      (key) => attractionBoxes[key]
    );
    const checkedEatingDrinking = Object.keys(eatingDrinkingBoxes).filter(
      (key) => eatingDrinkingBoxes[key]
    );
    const checkedCuisine = Object.keys(cuisineBoxes).filter(
      (key) => cuisineBoxes[key]
    );
    setQuery({
      ...query,
      restaurantType: checkedEatingDrinking,
      attractionType: checkedAttractions,
      cuisine: checkedCuisine,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attractionBoxes, eatingDrinkingBoxes]);

  const getPlaces = () => {
    const data = "";
    const config = {
      method: "get",
      url: "https://citytrekserver-env.com/pathway",
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
        setMarkers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (
      query.restaurantType.length === 0 ||
      query.attractionType.length === 0 ||
      query.cuisine.length === 0 ||
      query.city == null ||
      query.mobility == null
    ) {
      // eslint-disable-next-line no-alert
      alert("Please select one of each category!");
    } else {
      navigate("/itinerary");
      getPlaces();
    }
  };

  return (
    <div className="home">
      <div className="logo1">
        <img src={logo1} alt="CityTreklogo" height="120" className="logo1" />
      </div>
      <div className="logo2">
        <img src={logo2} alt="CityTreklogo" height="120" className="logo2" />
      </div>
      <p>We'll plan your walking tour of the city. Where are you going?</p>
      <form>
        <div className="home-form">
          <label htmlFor="home-city" className="home-city">
            <p>I'm going to...</p>
            <select
              required
              name="home-city"
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
              <b>Eating/Drinking</b>
              <input
                type="checkbox"
                id="eatingdrinking"
                value={eatingDrinking}
                checked={eatingDrinking}
                name="eatingdrinking"
                onChange={toggleSelection}
              />
            </label>
            {eatingDrinking && (
              <EatDrinkForm
                query={query}
                setQuery={setQuery}
                eatingDrinkingBoxes={eatingDrinkingBoxes}
                setEatingDrinkingBoxes={setEatingDrinkingBoxes}
                cuisineBoxes={cuisineBoxes}
                setCuisineBoxes={setCuisineBoxes}
              />
            )}
            <br />
            <label htmlFor="attractions" className="attractions">
              <b>Attractions</b>
              <input
                type="checkbox"
                id="attractions"
                value={attractions}
                checked={attractions}
                name="attractions"
                onChange={toggleSelection}
              />
            </label>
            {attractions && (
              <AttractionsForm
                query={query}
                setQuery={setQuery}
                attractionBoxes={attractionBoxes}
                setAttractionBoxes={setAttractionBoxes}
              />
            )}
            <br />
          </label>
        </div>
        <Link className="navbar-item" to="/itinerary" onClick={handleOnClick}>
          <button type="submit">Plan my day!</button>
        </Link>
      </form>
    </div>
  );
};

Home.propTypes = {
  setMarkers: PropTypes.func.isRequired,
};

export default Home;
