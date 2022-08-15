import React from "react";

const EatDrinkForm = () => {
    return (
<div>
    <p>I`&apos;`m looking for...</p>
        <label htmlFor="eatdrinktype">
            Restaurants
            <input type="checkbox" id="restaurants" name="restaurants" value="yes"></input>
            Cafés
            <input type="checkbox" id="cafes" name="cafes" value="yes"></input>
            Pubs/Bars
            <input type="checkbox" id="pubs/bars" name="pubs/bars" value="yes"></input>
        </label>
    <button type="submit">Go!</button>
</div>
)};
  
  export default EatDrinkForm;