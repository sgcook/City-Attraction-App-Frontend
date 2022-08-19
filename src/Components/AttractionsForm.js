/* eslint-disable react/no-unescaped-entities */
import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";

const AttractionsForm = ({ query, setQuery }) => {
  useEffect(() => {
    setQuery({ ...query, attractionType: [] });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    if (document.getElementById("any").checked === true) {
      document.getElementById("museums/galleries").checked = false;
      document.getElementById("parks/gardens").checked = false;
      document.getElementById("landmarks/monuments").checked = false;
    }
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <p>I'd like to visit...</p>
      <label htmlFor="attractions">
        Museums/Galleries
        <input
          type="checkbox"
          id="museums/galleries"
          name="museums/galleries"
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
          id="landmarks/monuments"
          name="landmarks/monuments"
          value="landmarks/monuments"
          onClick={(e) => {
            setQuery({
              ...query,
              attractionType: [...query.attractionType, e.target.value],
            });
          }}
        />
        <br />
        Any
        <input
          id="any"
          name="any"
          value="anyAttraction"
          checked={isChecked}
          onChange={handleOnChange}
          onClick={(e) => {
            setQuery({
              ...query,
              attractionType: [...query.attractionType, e.target.value],
            });
          }}
        />
        <br />
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
