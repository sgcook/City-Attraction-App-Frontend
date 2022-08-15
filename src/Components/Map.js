import React, { useState } from "react";
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import "../Styles/map.css";
import Markers from "../Markers.json";

const Map = () => {
  const [itineraryDirections, setItineraryDirections] = useState();

  const fiveRestaurants = Markers.slice(0, 5);
  const restaurantWaypoints = fiveRestaurants.map((place) => {
    return {
      location: { lat: place.coordinates[0], lng: place.coordinates[1] },
    };
  });

  const latCoords = fiveRestaurants.map((place) => place.coordinates[0]);
  const lngcoords = fiveRestaurants.map((place) => place.coordinates[1]);

  const findAverageCoords = () => {
    const latAverage = latCoords.reduce((a, b) => a + b, 0) / latCoords.length;
    const lngAverage = lngcoords.reduce((a, b) => a + b, 0) / lngcoords.length;

    const coords = [];
    coords.push(latAverage, lngAverage);
    return coords;
  };

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
      <div className="map-stops">
        <h2>Stops</h2>
        <ul className="map-restaurants">
          {fiveRestaurants.map((restaurant) => (
            <li className="restaurant" key={restaurant.restaurant}>
              {restaurant.restaurant}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Map;
