import React, { useState } from "react";
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import PropTypes from "prop-types";
import { findAverageCoords } from "../helpers";

const Map = ({ places, restaurantWaypoints, station }) => {
  const [itineraryDirections, setItineraryDirections] = useState();

  const latCoords = places.map((place) => place.latitude);
  const lngcoords = places.map((place) => place.longitude);

  findAverageCoords(latCoords, lngcoords);

  const averageCoords = findAverageCoords(latCoords, lngcoords);

  const fetchDirections = () => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: { lat: station.latitude, lng: station.longitude },
        destination: {
          lat: station.latitude,
          lng: station.longitude,
        },
        travelMode: window.google.maps.TravelMode.WALKING,
        waypoints: restaurantWaypoints,
        optimizeWaypoints: true,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setItineraryDirections(result);
        } else {
          console.log("error");
        }
      }
    );
  };

  let distance = 0;
  let time = 0;
  let hours = 0;
  let minutes = 0;
  if (itineraryDirections) {
    itineraryDirections.routes[0].legs.forEach((leg) => {
      distance += leg.distance.value;
    });
    itineraryDirections.routes[0].legs.forEach((leg) => {
      time += leg.duration.value;
    });
    distance /= 1000;
    time /= 60;
    hours = Math.floor(time / 60);
    minutes = time % 60;
  }

  return (
    <div className="map">
      <GoogleMap
        zoom={13.5}
        center={{ lat: averageCoords[0], lng: averageCoords[1] }}
        mapContainerClassName="map-container"
      >
        <MarkerF
          key={[station.latitude, station.longitude]}
          position={{
            lat: station.latitude,
            lng: station.longitude,
          }}
        />
        {places &&
          places.map((place) => (
            <MarkerF
              key={place.place_name}
              position={{
                lat: place.latitude,
                lng: place.longitude,
              }}
              onLoad={fetchDirections}
            />
          ))}
        {itineraryDirections && (
          <DirectionsRenderer directions={itineraryDirections} />
        )}
      </GoogleMap>
      <div className="map-text">
        <h2 className="map-stops">Stops</h2>
        <ul className="map-places">
          <li>{station.place_name}</li>
          {places.map((place) => (
            <li className="place" key={place.place_name}>
              {place.place_name}
            </li>
          ))}
          <li>{station.place_name}</li>
        </ul>
        <p>
          <b>Total Distance: </b>
          {Math.round(distance * 10) / 10} km
        </p>
        <p>
          <b>Estimated time: </b>
          {hours} hour(s) {Math.round(minutes)} minute(s)
        </p>
      </div>
    </div>
  );
};

Map.propTypes = {
  places: PropTypes.arrayOf(
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
  restaurantWaypoints: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    })
  ).isRequired,
  station: PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    place_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Map;
