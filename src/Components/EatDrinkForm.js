/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import PropTypes from "prop-types";
import CuisineForm from "./CuisineForm";

const EatDrinkForm = ({
  cuisineBoxes,
  eatingDrinkingBoxes,
  setCuisineBoxes,
  setEatingDrinkingBoxes,
}) => {
  const [cuisine, setCuisine] = useState(false);
  const handleOnChange = (e) => {
    const { name } = e.target;
    const { checked } = e.target;
    setEatingDrinkingBoxes({ ...eatingDrinkingBoxes, [name]: checked });
  };
  return (
    <div className="eatdrinktype">
      <p>I'm looking for...</p>
      {/* Might be why restaurants is such large font */}
      <label htmlFor="eatdrinktype" className="eatdrinktype">
        Restaurants
        <input
          type="checkbox"
          id="restaurant"
          name="restaurant"
          checked={eatingDrinkingBoxes.restaurant}
          value="restaurant"
          onChange={(e) => {
            handleOnChange(e);
            setCuisine(!cuisine);
          }}
        />
        <br />
        <label htmlFor="cafe" className="cafe">
          Cafés
          <input
            type="checkbox"
            id="cafe"
            name="cafe"
            value="cafe"
            checked={eatingDrinkingBoxes.cafe}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </label>
        <br />
        <label htmlFor="pubsBar" className="pubsBar">
          Pubs/Bars
          <input
            type="checkbox"
            id="pubsBar"
            name="pubsBar"
            value="pubsBar"
            checked={eatingDrinkingBoxes.pubsBar}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </label>
        <br />
        {cuisine && (
          <CuisineForm
            cuisineBoxes={cuisineBoxes}
            setCuisineBoxes={setCuisineBoxes}
          />
        )}
      </label>
    </div>
  );
};

EatDrinkForm.propTypes = {
  cuisineBoxes: PropTypes.shape({
    asian: PropTypes.bool.isRequired,
    britishAmerican: PropTypes.bool.isRequired,
    indian: PropTypes.bool.isRequired,
    european: PropTypes.bool.isRequired,
    vegetarianVegan: PropTypes.bool.isRequired,
    middleEastern: PropTypes.bool.isRequired,
    other: PropTypes.bool.isRequired,
  }).isRequired,
  eatingDrinkingBoxes: PropTypes.shape({
    restaurant: PropTypes.bool.isRequired,
    cafe: PropTypes.bool.isRequired,
    pubsBar: PropTypes.bool.isRequired,
  }).isRequired,
  setCuisineBoxes: PropTypes.func.isRequired,
  setEatingDrinkingBoxes: PropTypes.func.isRequired,
};

export default EatDrinkForm;
