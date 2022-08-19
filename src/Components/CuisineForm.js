import { React, useState } from "react";

const CuisineForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnClick = () => {
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
        <input type="checkbox" id="asian" name="restaurants" value="yes" />
        British/American
        <input type="checkbox" id="british/american" name="cafes" value="yes" />
        Indian
        <input type="checkbox" id="indian" name="pubs/bars" value="yes" />
        <br />
        European
        <input type="checkbox" id="european" name="pubs/bars" value="yes" />
        Vegetarian/Vegan
        <input
          type="checkbox"
          id="vegetarian/vegan"
          name="pubs/bars"
          value="yes"
        />
        Middle-Eastern
        <br />
        <input
          type="checkbox"
          id="middleeastern"
          name="pubs/bars"
          value="yes"
        />
        Caribbean
        <input type="checkbox" id="caribbean" name="pubs/bars" value="yes" />
        Other
        <input type="checkbox" id="other" name="pubs/bars" value="yes" />
        Any
        <input
          type="checkbox"
          id="any"
          name="any"
          checked={isChecked}
          onClick={handleOnClick}
          value="yes"
        />
      </label>
    </div>
  );
};

export default CuisineForm;
