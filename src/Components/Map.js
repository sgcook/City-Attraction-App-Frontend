import React, { useState } from "react";
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import PropTypes from "prop-types";
import { findAverageCoords } from "../helpers";

const Map = ({ fiveRestaurants, restaurantWaypoints }) => {
  const [itineraryDirections, setItineraryDirections] = useState();

  const latCoords = fiveRestaurants.map((place) => place.coordinates[0]);
  const lngcoords = fiveRestaurants.map((place) => place.coordinates[1]);

  findAverageCoords(latCoords, lngcoords);

  const averageCoords = findAverageCoords(latCoords, lngcoords);
  const stationCoords = [55.859120812594185, -4.258096061153975];

  const fetchDirections = () => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: { lat: stationCoords[0], lng: stationCoords[1] },
        destination: { lat: stationCoords[0], lng: stationCoords[1] },
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
          key={stationCoords}
          position={{ lat: stationCoords[0], lng: stationCoords[1] }}
        />
        {fiveRestaurants.map((place) => (
          <MarkerF
            key={place.coordinates[0]}
            position={{
              lat: place.coordinates[0],
              lng: place.coordinates[1],
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
        <ul className="map-restaurants">
          {fiveRestaurants.map((restaurant) => (
            <li className="restaurant" key={restaurant.restaurant}>
              {restaurant.restaurant}
            </li>
          ))}
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
  fiveRestaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      restaurant: PropTypes.string,
      address: PropTypes.string,
      price: PropTypes.string,
      rating: PropTypes.string,
      category: PropTypes.string,
      coordinates: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  restaurantWaypoints: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    })
  ).isRequired,
};

export default Map;
