import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import PropTypes from "prop-types";
import Map from "./Map";
import Pathway from "./Pathway";
import "../Styles/itinerary.css";

const Itinerary = ({ markers }) => {
  let places;
  let restaurantWaypoints = null;
  let station;
  let allPlaces;

  if (markers) {
    places = markers.map((place) => {
      return {
        ...place,
        latitude: Number(place.latitude),
        longitude: Number(place.longitude),
        rating: Number(place.rating),
      };
    });
  }

  const stations = [
    {
      address: "Piccadilly Station Approach, Manchester M60 7RA",
      city: "manchester",
      latitude: 53.47742615773809,
      longitude: -2.2311720661564736,
      place_name: "Manchester Piccadilly",
    },
    {
      address: "",
      city: "liverpool",
      latitude: 53.40465505112632,
      longitude: -2.9800088233613056,
      place_name: "Lime Street",
    },
    {
      address: "Station St, Birmingham B2 4QA",
      city: "birmingham",
      latitude: 52.4777654153648,
      longitude: -1.8989640367238785,
      place_name: "New Street",
    },
    {
      address: "Gordon St, Glasgow G1 3SL",
      city: "glasgow",
      latitude: 55.859120812594185,
      longitude: -4.258096061153975,
      place_name: "Glasgow Central",
    },
    {
      address: "Euston Rd, London NW1 2RT",
      city: "london",
      latitude: 51.52810909174548,
      longitude: -0.13320773126015856,
      place_name: "London Euston",
    },
  ];

  if (places) {
    restaurantWaypoints = places.map((place) => {
      return {
        location: { lat: place.latitude, lng: place.longitude },
      };
    });
    station = stations.find((place) => place.city === places[0].city);
    allPlaces = [station, ...places, station];
  }

  /* need to reassign place */

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
    return (
      <Pathway allPlaces={allPlaces} setButtonClicked={setButtonClicked} />
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
