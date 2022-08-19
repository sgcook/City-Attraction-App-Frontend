/* eslint-disable react/no-unescaped-entities */
import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CuisineForm from "./CuisineForm";

const EatDrinkForm = ({ query, setQuery }) => {
  const [cuisine, setCuisine] = useState(false);
  useEffect(() => {
    setQuery({ ...query, restaurantType: [] });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          value="restaurants"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: [...query.restaurantType, e.target.value],
            });
          }}
        />
        <br />
        Cafés
        <input
          type="checkbox"
          id="cafes"
          name="cafes"
          value="cafes"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: [...query.restaurantType, e.target.value],
            });
          }}
        />
        <br />
        Pubs/Bars
        <input
          type="checkbox"
          id="pubs/bars"
          name="pubs/bars"
          value="pubsBars"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: [...query.restaurantType, e.target.value],
            });
          }}
        />
        <br />
        Any
        <input
          type="checkbox"
          id="any"
          name="any"
          value="anyRestaurant"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: [...query.restaurantType, e.target.value],
            });
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
