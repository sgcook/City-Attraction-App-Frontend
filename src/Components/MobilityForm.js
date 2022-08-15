import React from "react";

const Mobility = () => {
return (
    <div>
        <p>How much walking do you want to do?</p>
        <label htmlFor="walking">
            <select className="walking">
              <option>Easy</option>
              <option>Moderate</option>
              <option>Strenuous</option>
            </select>
            </label>
    </div>
)}

export default Mobility;