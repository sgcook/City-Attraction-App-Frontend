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
        //     <div>
        //     <p>Great! What kind of food do you like?</p>
        //     <fieldset>
        //     <label htmlFor="asian">Asian</label><input type="radio" name="action" id="asian" value="asian" /><br />
        //     <label htmlFor="british/american">British/American</label><input type="radio" name="action" id="british/american" value="british/american" /><br />
        //     <label htmlFor="caribbean">Caribbean</label><input type="radio" name="action" id="caribbean" value="caribbean" />
        //     <br></br>
        //     <label htmlFor="european">European</label><input type="radio" name="action" id="european" value="european" /><br />
        //     <label htmlFor="indian">Indian</label><input type="radio" name="action" id="indian" value="indian" />
        //     <label htmlFor="middleEasten">Middle Easten</label><input type="radio" name="action" id="MiddleEasten" value="MiddleEasten" /><br />
        //     <label htmlFor="vegearian/vegan">Vegearian/Vegan</label><input type="radio" name="action" id="vegearian/vegan" value="vegearian/vegan" /><br />
        //     <label htmlFor="other">Other</label><input type="radio" name="action" id="other" value="other" />
        //     </fieldset>
        // </div>
)};
  
  export default CuisineForm;