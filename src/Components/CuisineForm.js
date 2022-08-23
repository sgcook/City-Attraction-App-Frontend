import React from "react";
import PropTypes from "prop-types";

const CuisineForm = ({ cuisineBoxes, setCuisineBoxes }) => {
  const handleOnChange = (e) => {
    const { name } = e.target;
    const { checked } = e.target;
    setCuisineBoxes({ ...cuisineBoxes, [name]: checked });
  };

  return (
    <div className="cuisine">
      <p>Great! What kind of food do you like?</p>
      <label htmlFor="cuisine" className="cuisine">
        <label htmlFor="asian" className="asian">
          Asian
          <input
            type="checkbox"
            id="asian"
            name="asian"
            value="asian"
            checked={cuisineBoxes.asian}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </label>
        <br />
        <label htmlFor="britishAmerican" className="britishAmerican">
          British/American
          <input
            type="checkbox"
            id="britishAmerican"
            name="britishAmerican"
            value="britishAmerican"
            checked={cuisineBoxes.britishAmerican}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </label>
        <br />
        <label htmlFor="indian" className="indian">
          Indian
          <input
            type="checkbox"
            id="indian"
            name="indian"
            value="indian"
            checked={cuisineBoxes.indian}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </label>
        <br />
        <label htmlFor="european" className="european">
          European
          <input
            type="checkbox"
            id="european"
            name="european"
            value="european"
            checked={cuisineBoxes.european}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </label>
        <br />
        <label htmlFor="vegetarianVegan" className="vegetarianVegan">
          Vegetarian/Vegan
          <input
            type="checkbox"
            id="vegetarianVegan"
            name="vegetarianVegan"
            value="vegetarianVegan"
            checked={cuisineBoxes.vegetarianVegan}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </label>
        <br />
        <label htmlFor="middleEastern" className="middleEastern">
          Middle-Eastern
          <input
            type="checkbox"
            id="middleEastern"
            name="middleEastern"
            value="middleEastern"
            checked={cuisineBoxes.middleEastern}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </label>
        <br />
        <label htmlFor="other" className="other">
          Other
          <input
            type="checkbox"
            id="other"
            name="other"
            value="other"
            checked={cuisineBoxes.other}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </label>
        <br />
      </label>
    </div>
  );
};

CuisineForm.propTypes = {
  cuisineBoxes: PropTypes.shape({
    asian: PropTypes.bool.isRequired,
    britishAmerican: PropTypes.bool.isRequired,
    indian: PropTypes.bool.isRequired,
    european: PropTypes.bool.isRequired,
    vegetarianVegan: PropTypes.bool.isRequired,
    middleEastern: PropTypes.bool.isRequired,
    other: PropTypes.bool.isRequired,
  }).isRequired,
  setCuisineBoxes: PropTypes.func.isRequired,
};

export default CuisineForm;
