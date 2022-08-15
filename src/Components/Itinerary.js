import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Direction from "./Direction";
import "../Styles/itinerary.css";
import Markers from "../Markers.json";

const Itinerary = () => {
  const fiveRestaurants = Markers.slice(0, 5);
  const restaurantWaypoints = fiveRestaurants.map((place) => {
    return {
      location: { lat: place.coordinates[0], lng: place.coordinates[1] },
    };
  });

  const [buttonClicked, setButtonClicked] = useState(false);
  const allPlaces = [
    {
      restaurant: "station",
      coordinates: [55.859120812594185, -4.258096061153975],
    },
    ...fiveRestaurants,
    {
      restaurant: "station",
      coordinates: [55.859120812594185, -4.258096061153975],
    },
  ];

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
    return (
      <Direction allPlaces={allPlaces} setButtonClicked={setButtonClicked} />
    );
  }
  return (
    <div className="itinerary">
      <Map
        fiveRestaurants={fiveRestaurants}
        restaurantWaypoints={restaurantWaypoints}
      />
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
