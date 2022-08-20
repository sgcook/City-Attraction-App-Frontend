/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AttractionsForm = ({ query, setQuery }) => {
  useEffect(() => {
    setQuery({ ...query, attractionType: [] });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialState = {
    museumsGalleries: false,
    parksGardens: false,
    landmarksMonuments: false,
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
      <p>I'd like to visit...</p>
      <label htmlFor="attractions">
        Museums/Galleries
        <input
          type="checkbox"
          id="museumsGalleries"
          name="museumsGalleries"
          value="museumsGalleries"
          checked={fields.museumsGalleries}
          onChange={(e) => {
            setQuery({
              ...query,
              attractionType: [...query.attractionType, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        <br />
        Parks/Gardens
        <input
          type="checkbox"
          id="parksGardens"
          name="parksGardens"
          value="parksGardens"
          checked={fields.parksGardens}
          onChange={(e) => {
            setQuery({
              ...query,
              attractionType: [...query.attractionType, e.target.value],
            });
            handleOnChange(e);
          }}
        />
        <br />
        Landmarks/Monuments
        <input
          type="checkbox"
          id="landmarksMonuments"
          name="landmarksMonuments"
          value="landmarksMonuments"
          checked={fields.landmarksMonuments}
          onChange={(e) => {
            setQuery({
              ...query,
              attractionType: [...query.attractionType, e.target.value],
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
          checked={fields.any}
          value="any"
          onChange={(e) => {
            setQuery({
              ...query,
              attractionType: [...query.attractionType, e.target.value],
            });
            handleOnChange(e);
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
