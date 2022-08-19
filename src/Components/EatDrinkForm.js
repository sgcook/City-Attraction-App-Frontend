/* eslint-disable react/no-unescaped-entities */
import { React, useState } from "react";
import CuisineForm from "./CuisineForm";

const EatDrinkForm = () => {
  const [cuisine, setCuisine] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleOnClick = () => {
    if (document.getElementById("any").checked === true) {
      document.getElementById("cafes").checked = false;
      document.getElementById("pubs/bars").checked = false;
      document.getElementById("restaurants").checked = false;
    }
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <p>I'm looking for...</p>
      <label htmlFor="eatdrinktype">
        Restaurants
        <input
          type="checkbox"
          id="restaurants"
          name="restaurants"
          onChange={() => setCuisine(!cuisine)}
          value="yes"
        />
        <br />
        Cafés
        <input type="checkbox" id="cafes" name="cafes" value="yes" />
        <br />
        Pubs/Bars
        <input type="checkbox" id="pubs/bars" name="pubs/bars" value="yes" />
        <br />
        Any
        <input
          type="checkbox"
          id="any"
          name="any"
          value="yes"
          checked={isChecked}
          onClick={handleOnClick}
        />
      </label>
      {cuisine && <CuisineForm />}
    </div>
  );
};

export default EatDrinkForm;
