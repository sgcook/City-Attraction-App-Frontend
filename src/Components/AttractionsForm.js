/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";

const AttractionsForm = ({ attractionBoxes, setAttractionBoxes }) => {
  const handleOnChange = (e) => {
    const { name } = e.target;
    const { checked } = e.target;
    setAttractionBoxes({ ...attractionBoxes, [name]: checked });
  };

  return (
    <div>
      <label htmlFor="attractions" className="attractions">
        <p>I'd like to visit...</p>
        Museums/Galleries
        <input
          type="checkbox"
          id="museumsGalleries"
          name="museumsGalleries"
          value="museumsGalleries"
          checked={attractionBoxes.museumsGalleries}
          onChange={(e) => {
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
          checked={attractionBoxes.parksGardens}
          onChange={(e) => {
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
          checked={attractionBoxes.landmarksMonuments}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
      </label>
    </div>
  );
};

AttractionsForm.propTypes = {
  attractionBoxes: PropTypes.shape({
    museumsGalleries: PropTypes.bool.isRequired,
    parksGardens: PropTypes.bool.isRequired,
    landmarksMonuments: PropTypes.bool.isRequired,
  }).isRequired,
  setAttractionBoxes: PropTypes.func.isRequired,
};

export default AttractionsForm;
