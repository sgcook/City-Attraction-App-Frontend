/* eslint-disable react/no-unescaped-entities */
import { React, useState } from "react";

const AttractionsForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnClick = () => {
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
          value="yes"
        />
        <br />
        Parks/Gardens
        <input
          type="checkbox"
          id="parks/gardens"
          name="parks/gardens"
          value="yes"
        />
        <br />
        Landmarks/Monuments
        <input
          type="checkbox"
          id="landmarks/monuments"
          name="landmarks/monuments"
          value="yes"
        />
        <br />
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

export default AttractionsForm;
