/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-as-default
import CuisineForm from "./CuisineForm";

const EatDrinkForm = ({ query, setQuery }) => {
  useEffect(() => {
    setQuery({ ...query, restaurantType: [] });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const initialState = {
  //   restaurant: false,
  //   cafe: false,
  //   pubsBar: false,
  //   any: false,
  // };
  // const [fields, setFields] = useState(initialState);
  const [cuisine, setCuisine] = useState(false);
  // const handleOnChange = (e) => {
  //   const { name } = e.target;
  //   const { checked } = e.target;
  //   if (name === "any") {
  //     setFields({ ...initialState, any: true });
  //   } else {
  //     setFields((previousState) => {
  //       return { ...previousState, [name]: checked, any: false };
  //     });
  //   }
  // };
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
          // checked={fields.restaurant}
          value="restaurant"
          onChange={(e) => {
            setQuery({
              ...query,
              restaurantType: [...query.restaurantType, e.target.value],
            });
            // handleOnChange(e);
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
            // checked={fields.cafe}
            onChange={(e) => {
              setQuery({
                ...query,
                restaurantType: [...query.restaurantType, e.target.value],
              });
              // handleOnChange(e);
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
            // checked={fields.pubsBar}
            onChange={(e) => {
              setQuery({
                ...query,
                restaurantType: [...query.restaurantType, e.target.value],
              });
              // handleOnChange(e);
            }}
          />
        </label>
        <br />
        {cuisine && <CuisineForm query={query} setQuery={setQuery} />}
      </label>
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
