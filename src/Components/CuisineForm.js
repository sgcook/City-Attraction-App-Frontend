import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CuisineForm = ({ query, setQuery }) => {
  useEffect(() => {
    setQuery({ ...query, cuisine: [] });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    if (document.getElementById("any").checked === true) {
      document.getElementById("asian").checked = false;
      document.getElementById("british/american").checked = false;
      document.getElementById("indian").checked = false;
      document.getElementById("european").checked = false;
      document.getElementById("vegetarian/vegan").checked = false;
      document.getElementById("middleeastern").checked = false;
      document.getElementById("caribbean").checked = false;
      document.getElementById("other").checked = false;
    }
    setIsChecked(!isChecked);
  };

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
              cuisine: [...query.cuisine, e.target.value],
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
              cuisine: [...query.cuisine, e.target.value],
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
              cuisine: [...query.cuisine, e.target.value],
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
              cuisine: [...query.cuisine, e.target.value],
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
              cuisine: [...query.cuisine, e.target.value],
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
              cuisine: [...query.cuisine, e.target.value],
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
              cuisine: [...query.cuisine, e.target.value],
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
              cuisine: [...query.cuisine, e.target.value],
            });
          }}
        />
        Any
        <input
          type="checkbox"
          id="any"
          name="any"
          checked={isChecked}
          value="anyCuisine"
          onChange={handleOnChange}
          onClick={(e) => {
            setQuery({
              ...query,
              cuisine: [...query.cuisine, e.target.value],
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
    cuisine: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default CuisineForm;
