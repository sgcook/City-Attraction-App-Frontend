/* eslint-disable react/no-unescaped-entities */
import React from "react";

const AttractionsForm = () => {
  return (
    <div>
<<<<<<< HEAD
    <p>I'd like to visit...</p>
        <label htmlFor="attractions" className="checkbox">
            Museums/Galleries
            <input type="checkbox" id="museumsgalleries" name="museumsgalleries" value="yes"></input>
            <br></br>
            Parks/Gardens
            <input type="checkbox" id="parks/gardens" name="parks/gardens" value="yes"></input>
            <br></br>
            Landmarks/Monuments
            <input type="checkbox" id="indian" name="pubs/bars" value="yes"></input>
            <br></br>
            Any
            <input type="checkbox" id="any" name="any" value="yes"></input>

        </label>
=======
      <p>I'd like to visit...</p>
      <label htmlFor="attractions">
        Museums/Galleries
        <input
          type="checkbox"
          id="museumsgalleries"
          name="museumsgalleries"
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
        <input type="checkbox" id="indian" name="pubs/bars" value="yes" />
        <br />
        Any <input type="checkbox" id="any" name="any" value="yes" />
      </label>
>>>>>>> main
    </div>
  );
};

export default AttractionsForm;
