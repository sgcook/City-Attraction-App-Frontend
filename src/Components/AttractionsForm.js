/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";

const AttractionsForm = ({ query, setQuery }) => {
  return (
    <div>
      <p>I'd like to visit...</p>
      <label htmlFor="attractions">
        Museums/Galleries
        <input
          type="checkbox"
          id="museumsgalleries"
          name="museumsgalleries"
          value="museumsGalleries"
          onClick={(e) => {
            setQuery({
              ...query,
              attractionType: {
                ...query.attractionType,
                museumsGalleries: e.target.value,
              },
            });
          }}
        />
        <br />
        Parks/Gardens
        <input
          type="checkbox"
          id="parks/gardens"
          name="parks/gardens"
          value="parksGardens"
          onClick={(e) => {
            setQuery({
              ...query,
              attractionType: {
                ...query.attractionType,
                parksGardens: e.target.value,
              },
            });
          }}
        />
        <br />
        Landmarks/Monuments
        <input
          type="checkbox"
          id="indian"
          name="pubs/bars"
          value="landmarksMonuments"
          onClick={(e) => {
            setQuery({
              ...query,
              attractionType: {
                ...query.attractionType,
                landmarksMonuments: e.target.value,
              },
            });
          }}
        />
        <br />
        Any{" "}
        <input
          type="checkbox"
          id="any"
          name="any"
          value="anyAttraction"
          onClick={(e) => {
            setQuery({
              ...query,
              attractionType: {
                ...query.attractionType,
                anyAttractions: e.target.value,
              },
            });
          }}
        />
      </label>
    </div>
  );
};

AttractionsForm.propTypes = {
  query: PropTypes.shape({
    city: PropTypes.string.isRequired,
    mobility: PropTypes.string.isRequired,
    restaurantType: PropTypes.string.isRequired,
    attractionType: PropTypes.string.isRequired,
  }).isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default AttractionsForm;
