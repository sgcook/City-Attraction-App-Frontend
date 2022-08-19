import React from "react";
import PropTypes from "prop-types";

const CuisineForm = ({ query, setQuery }) => {
  return (
    <div>
      <p>Great! What kind of food do you like?</p>
      <label htmlFor="cuisine" className="checkbox">
        Asian
        <input
          type="checkbox"
          id="asian"
          name="restaurants"
          value="asian"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: {
                ...query.restaurantType,
                cuisine: {
                  ...query.restaurantType.cuisine,
                  asian: e.target.value,
                },
              },
            });
          }}
        />
        British/American
        <input
          type="checkbox"
          id="british/american"
          name="cafes"
          value="british/american"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: {
                ...query.restaurantType,
                cuisine: {
                  ...query.restaurantType.cuisine,
                  britishAmerican: e.target.value,
                },
              },
            });
          }}
        />
        Indian
        <input
          type="checkbox"
          id="indian"
          name="pubs/bars"
          value="indian"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: {
                ...query.restaurantType,
                cuisine: {
                  ...query.restaurantType.cuisine,
                  indian: e.target.value,
                },
              },
            });
          }}
        />
        <br />
        European
        <input
          type="checkbox"
          id="european"
          name="pubs/bars"
          value="european"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: {
                ...query.restaurantType,
                cuisine: {
                  ...query.restaurantType.cuisine,
                  european: e.target.value,
                },
              },
            });
          }}
        />
        Vegetarian/Vegan
        <input
          type="checkbox"
          id="vegetarian/vegan"
          name="pubs/bars"
          value="vegetarian/vegan"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: {
                ...query.restaurantType,
                cuisine: {
                  ...query.restaurantType.cuisine,
                  vegetarianVegan: e.target.value,
                },
              },
            });
          }}
        />
        Middle-Eastern
        <br />
        <input
          type="checkbox"
          id="middleEastern"
          name="pubs/bars"
          value="middleeastern"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: {
                ...query.restaurantType,
                cuisine: {
                  ...query.restaurantType.cuisine,
                  middleEastern: e.target.value,
                },
              },
            });
          }}
        />
        Caribbean
        <input
          type="checkbox"
          id="caribbean"
          name="pubs/bars"
          value="caribbean"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: {
                ...query.restaurantType,
                cuisine: {
                  ...query.restaurantType.cuisine,
                  Caribbean: e.target.value,
                },
              },
            });
          }}
        />
        Other
        <input
          type="checkbox"
          id="other"
          name="pubs/bars"
          value="other"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: {
                ...query.restaurantType,
                cuisine: {
                  ...query.restaurantType.cuisine,
                  Other: e.target.value,
                },
              },
            });
          }}
        />
        Any
        <input
          type="checkbox"
          id="any"
          name="any"
          value="anyCuisine"
          onClick={(e) => {
            setQuery({
              ...query,
              restaurantType: {
                ...query.restaurantType,
                cuisine: {
                  ...query.restaurantType.cuisine,
                  Any: e.target.value,
                },
              },
            });
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
    restaurantType: PropTypes.string.isRequired,
  }).isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default CuisineForm;
