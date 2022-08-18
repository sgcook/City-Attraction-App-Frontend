import React from "react";

const CuisineForm = () => {
    return (
    <div>
        <p>Great! What kind of food do you like?</p>
            <label htmlFor="cuisine">
            Asian
            <input type="checkbox" id="asian" name="restaurants" value="yes"></input>
            British/American
            <input type="checkbox" id="british/american" name="cafes" value="yes"></input>
            Indian
            <input type="checkbox" id="indian" name="pubs/bars" value="yes"></input>
            <br></br>
            European
            <input type="checkbox" id="european" name="pubs/bars" value="yes"></input>
            Vegetarian/Vegan
            <input type="checkbox" id="vegetarian/vegan" name="pubs/bars" value="yes"></input>
            Middle-Eastern
            <br></br>
            <input type="checkbox" id="middleeastern" name="pubs/bars" value="yes"></input>
            Caribbean
            <input type="checkbox" id="caribbean" name="pubs/bars" value="yes"></input>
            Other
            <input type="checkbox" id="other" name="pubs/bars" value="yes"></input>
            Any
            <input type="checkbox" id="any" name="any" value="yes"></input>
            </label>
        </div>
)};
  
  export default CuisineForm;