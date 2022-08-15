import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Direction from "./Direction";
import "../Styles/itinerary.css";

const Itinerary = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (buttonClicked) {
    return <Direction setButtonClicked={setButtonClicked} />;
  }
  return (
    <div className="itinerary">
      <Map />
      <button
        type="button"
        className="map-button"
        onClick={() => setButtonClicked(true)}
      >
        Begin!
      </button>
    </div>
  );
};

export default Itinerary;
