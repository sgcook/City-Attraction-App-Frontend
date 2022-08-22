/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CuisineForm from "./CuisineForm";

const EatDrinkForm = ({ query, setQuery }) => {
  useEffect(() => {
    setQuery({ ...query, restaurantType: [] });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const initialState = {
    restaurant: false,
    cafe: false,
    pubsBar: false,
    any: false,
  };
  const [fields, setFields] = useState(initialState);
  const [cuisine, setCuisine] = useState(false);
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
      <label htmlFor="eatdrinktype" className="eatdrinktype">
        <p>I'm looking for...</p>
        Restaurants
        <input
          type="checkbox"
          id="restaurant"
          name="restaurant"
          checked={fields.restaurant}
          value="restaurant"
          onChange={(e) => {
            setQuery({
              ...query,
              restaurantType: [...query.restaurantType, e.target.value],
            });
            handleOnChange(e);
            setCuisine(!cuisine);
          }}
        />
        <br />
        Cafés
        <input
          type="checkbox"
          id="cafe"
          name="cafe"
          value="cafe"
          checked={fields.cafe}
          onChange={(e) => {
            setQuery({
              ...query,
              restaurantType: [...query.restaurantType, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        <br />
        Pubs/Bars
        <input
          type="checkbox"
          id="pubsBar"
          name="pubsBar"
          value="pubsBar"
          checked={fields.pubsBar}
          onChange={(e) => {
            setQuery({
              ...query,
              restaurantType: [...query.restaurantType, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        <br />
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
              restaurantType: [...query.restaurantType, e.target.value],
            });
            handleOnChange(e);
            setCuisine(!cuisine);
          }}
        />
      </label>
      {cuisine && <CuisineForm query={query} setQuery={setQuery} />}
    </div>
  );
};

EatDrinkForm.propTypes = {
  query: PropTypes.shape({
    city: PropTypes.string.isRequired,
    mobility: PropTypes.string.isRequired,
    restaurantType: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default EatDrinkForm;
