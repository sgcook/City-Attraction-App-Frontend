import React, { useEffect, useState } from "react";
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import "../Styles/direction.css";
import PropTypes from "prop-types";
import { findAverageCoords } from "../helpers";

const Direction = ({ allPlaces, setButtonClicked }) => {
  const [averageCoords, setAverageCoords] = useState(null);
  const [direction, setDirection] = useState();
  const [pathway, setPathway] = useState([allPlaces[0], allPlaces[1]]);
  const [x, setX] = useState(0);

  useEffect(() => {
    setX(1);
  }, []);

  useEffect(() => {
    const latCoords = pathway.map((place) => place.coordinates[0]);
    const lngCoords = pathway.map((place) => place.coordinates[1]);
    setAverageCoords(findAverageCoords(latCoords, lngCoords));
  }, [pathway]);

  const fetchDirection = () => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: {
          lat: pathway[0].coordinates[0],
          lng: pathway[0].coordinates[1],
        },
        destination: {
          lat: pathway[1].coordinates[0],
          lng: pathway[1].coordinates[1],
        },
        travelMode: window.google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirection(result);
        } else {
          console.log("error");
        }
      }
    );
  };

  const moveBack = () => {
    setX(x - 1);
    setPathway([allPlaces[x - 2], allPlaces[x - 1]]);
  };

  const moveForward = () => {
    setX(x + 1);
    setPathway([allPlaces[x], allPlaces[x + 1]]);
  };

  if (averageCoords && pathway) {
    return (
      <div className="directions">
        <button
          type="button"
          className="full-directions"
          onClick={() => setButtonClicked(false)}
        >
          Full directions
        </button>
        <GoogleMap
          zoom={13.5}
          center={{ lat: averageCoords[0], lng: averageCoords[1] }}
          mapContainerClassName="map-container"
        >
          {pathway.map((place) => (
            <MarkerF
              key={place.coordinates}
              position={{
                lat: place.coordinates[0],
                lng: place.coordinates[1],
              }}
              onLoad={fetchDirection}
            />
          ))}
          {direction && <DirectionsRenderer directions={direction} />}
        </GoogleMap>
        <p>Start: {pathway[0].restaurant}</p>
        <p>Stop: {pathway[1].restaurant}</p>
        {x > 1 && (
          <button
            type="button"
            onClick={moveBack}
            className="direction-button back"
          >
            Back
          </button>
        )}
        {x < allPlaces.length - 1 && (
          <button
            type="button"
            onClick={moveForward}
            className="direction-button next"
          >
            Next
          </button>
        )}
      </div>
    );
  }
  return <h1>Loading...</h1>;
};

Direction.propTypes = {
  allPlaces: PropTypes.arrayOf(
    PropTypes.shape({
      restaurant: PropTypes.string,
      coordinates: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  setButtonClicked: PropTypes.func.isRequired,
};

export default Direction;
