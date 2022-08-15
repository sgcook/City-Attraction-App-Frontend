import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

const Itinerary = () => {
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
  return (
    <div>
      <Map />
    </div>
  );
};

export default Itinerary;
