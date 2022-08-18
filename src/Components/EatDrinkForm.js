/* eslint-disable react/no-unescaped-entities */
import { React, useState } from "react";
import CuisineForm from "./CuisineForm";

const EatDrinkForm = () => {
<<<<<<< HEAD
    const [cuisine, setCuisine] = useState(false);
    const toggleSelection = (e) => {
        if (e.target.name === "eatingdrinking") setCuisine(prev => !prev)
      }
    return (
        <div>
            <p>I'm looking for...</p>
                <label htmlFor="eatdrinktype" className="checkbox">
                Restaurants
                <input type="checkbox" id="eatingdrinking" value={cuisine} checked={cuisine} name="eatingdrinking" onChange={toggleSelection}></input>
                <br></br>
                Cafés
                <input type="checkbox" id="cafes" name="cafes" value="yes"></input>
                <br></br>
                Pubs/Bars
                <input type="checkbox" id="pubs/bars" name="pubs/bars" value="yes"></input>
                <br></br>
                Any
                <input type="checkbox" id="any" name="any" value="yes"></input>
                </label>
                {cuisine && (<CuisineForm />)}
            </div>
        )};
  
export default EatDrinkForm;
=======
  const [cuisine, setCuisine] = useState(false);
  return (
    <div>
      <p>I'm looking for...</p>
      <label htmlFor="eatdrinktype">
        Restaurants
        <input
          type="checkbox"
          id="restaurants"
          name="restaurants"
          onChange={() => setCuisine(!cuisine)}
          value="yes"
        />
        <br />
        Cafés
        <input type="checkbox" id="cafes" name="cafes" value="yes" />
        <br />
        Pubs/Bars
        <input type="checkbox" id="pubs/bars" name="pubs/bars" value="yes" />
        <br />
        Any
        <input type="checkbox" id="any" name="any" value="yes" />
      </label>
      {cuisine && <CuisineForm />}
    </div>
  );
};

export default EatDrinkForm;
>>>>>>> main
