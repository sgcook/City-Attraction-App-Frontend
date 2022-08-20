import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CuisineForm = ({ query, setQuery }) => {
  useEffect(() => {
    setQuery({ ...query, cuisine: [] });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const initialState = {
    asian: false,
    britishAmerican: false,
    indian: false,
    european: false,
    vegetarianVegan: false,
    middleEastern: false,
    caribbean: false,
    other: false,
    any: false,
  };
  const [fields, setFields] = useState(initialState);
  const handleOnChange = (e) => {
    const { name } = e.target;
    const { checked } = e.target;
    if (name === "any") {
      setFields({ ...initialState, any: true });
    } else {
      setFields((previousState) => {
        return { ...previousState, [name]: checked, any: false };
      });
    }
  };

  return (
    <div>
      <p>Great! What kind of food do you like?</p>
      <label htmlFor="cuisine" className="checkbox">
        Asian
        <input
          type="checkbox"
          id="asian"
          name="asian"
          value="asian"
          checked={fields.asian}
          onChange={(e) => {
            setQuery({
              ...query,
              cuisine: [...query.cuisine, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        British/American
        <input
          type="checkbox"
          id="britishAmerican"
          name="britishAmerican"
          value="british/american"
          checked={fields.britishAmerican}
          onChange={(e) => {
            setQuery({
              ...query,
              cuisine: [...query.cuisine, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        Indian
        <input
          type="checkbox"
          id="indian"
          name="indian"
          value="indian"
          checked={fields.indian}
          onChange={(e) => {
            setQuery({
              ...query,
              cuisine: [...query.cuisine, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        <br />
        European
        <input
          type="checkbox"
          id="european"
          name="european"
          value="european"
          checked={fields.european}
          onChange={(e) => {
            setQuery({
              ...query,
              cuisine: [...query.cuisine, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        Vegetarian/Vegan
        <input
          type="checkbox"
          id="vegetarianVegan"
          name="vegetarianVegan"
          value="vegetarian/vegan"
          checked={fields.vegetarianVegan}
          onChange={(e) => {
            setQuery({
              ...query,
              cuisine: [...query.cuisine, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        Middle-Eastern
        <br />
        <input
          type="checkbox"
          id="middleEastern"
          name="middleEastern"
          value="middleeastern"
          checked={fields.middleEastern}
          onChange={(e) => {
            setQuery({
              ...query,
              cuisine: [...query.cuisine, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        Caribbean
        <input
          type="checkbox"
          id="caribbean"
          name="caribbean"
          value="caribbean"
          checked={fields.caribbean}
          onChange={(e) => {
            setQuery({
              ...query,
              cuisine: [...query.cuisine, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        Other
        <input
          type="checkbox"
          id="other"
          name="other"
          value="other"
          checked={fields.other}
          onChange={(e) => {
            setQuery({
              ...query,
              cuisine: [...query.cuisine, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        Any
        <input
          type="checkbox"
          id="any"
          name="any"
          value="any"
          checked={fields.any}
          onChange={(e) => {
            setQuery({
              ...query,
              cuisine: [...query.cuisine, e.target.value],
            });
            handleOnChange(e);
          }}
        />
      </label>
    </div>
  );
};

CuisineForm.propTypes = {
  query: PropTypes.shape({
    city: PropTypes.string.isRequired,
    mobility: PropTypes.string.isRequired,
    cuisine: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default CuisineForm;
