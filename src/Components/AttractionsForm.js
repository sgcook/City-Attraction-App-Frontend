/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

const AttractionsForm = ({ query, setQuery }) => {
  useEffect(() => {
    setQuery({ ...query, attractionType: [] });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              attractionType: [...query.attractionType, e.target.value],
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
              attractionType: [...query.attractionType, e.target.value],
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
              attractionType: [...query.attractionType, e.target.value],
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
              attractionType: [...query.attractionType, e.target.value],
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
    restaurantType: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    attractionType: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default AttractionsForm;
