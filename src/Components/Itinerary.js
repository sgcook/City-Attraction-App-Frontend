import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import PropTypes from "prop-types";
import Map from "./Map";
import Pathway from "./Pathway";
import "../Styles/itinerary.css";
import Stations from "../stations.json";

const Itinerary = ({ markers }) => {
  let places;
  let restaurantWaypoints = null;
  let allPlaces;
  let station;

  if (markers && markers.length > 0) {
    places = markers.map((place) => {
      return {
        ...place,
        city: place.city.toLowerCase(),
        latitude: Number(place.latitude),
        longitude: Number(place.longitude),
        rating: Number(place.rating),
      };
    });

    restaurantWaypoints = places.map((place) => {
      return {
        location: { lat: place.latitude, lng: place.longitude },
      };
    });
    station = Stations.find((place) => place.city === places[0].city);
    allPlaces = [station, ...places, station];
  }

  const [buttonClicked, setButtonClicked] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (buttonClicked) {
    return (
      <Pathway allPlaces={allPlaces} setButtonClicked={setButtonClicked} />
    );
  }
  if (markers && markers.length === 0) {
    return (
      <div>
        <h1>No places found</h1>
      </div>
    );
  }
  return (
    <div className="itinerary">
      {places && (
        <Map
          places={places}
          restaurantWaypoints={restaurantWaypoints}
          station={station}
        />
      )}
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

Itinerary.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      attraction_type: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      mobility_level: PropTypes.string.isRequired,
      outside_inside: PropTypes.string.isRequired,
      place_name: PropTypes.string.isRequired,
      postcode: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Itinerary;
