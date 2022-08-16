import React, { useEffect, useState } from "react";
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import "../Styles/pathway.css";
import PropTypes from "prop-types";
import { findAverageCoords } from "../helpers";

const Pathway = ({ allPlaces, setButtonClicked }) => {
  const [averageCoords, setAverageCoords] = useState(null);
  const [direction, setDirection] = useState([]);
  const pathway = allPlaces;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const latCoords = [
      pathway[index].coordinates[0],
      pathway[index + 1].coordinates[0],
    ];
    const lngCoords = [
      pathway[index].coordinates[1],
      pathway[index + 1].coordinates[1],
    ];
    setAverageCoords(findAverageCoords(latCoords, lngCoords));
    setDirection([]);
  }, [index, pathway]);

  const fetchDirection = () => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: {
          lat: pathway[index].coordinates[0],
          lng: pathway[index].coordinates[1],
        },
        destination: {
          lat: pathway[index + 1].coordinates[0],
          lng: pathway[index + 1].coordinates[1],
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
    setIndex(index - 1);
  };

  const moveForward = () => {
    setIndex(index + 1);
  };

  if (averageCoords) {
    return (
      <div className="directions">
        <button
          type="button"
          className="full-directions"
          onClick={() => setButtonClicked(false)}
        >
          Full directions
        </button>
        <div className="map">
          <GoogleMap
            zoom={15}
            center={{ lat: averageCoords[0], lng: averageCoords[1] }}
            mapContainerClassName="map-container"
            onCenterChanged={fetchDirection}
          >
            <MarkerF
              key={pathway[index].coordinates}
              position={{
                lat: pathway[index].coordinates[0],
                lng: pathway[index].coordinates[1],
              }}
            />
            <MarkerF
              key={pathway[index + 1].coordinates}
              position={{
                lat: pathway[index + 1].coordinates[0],
                lng: pathway[index + 1].coordinates[1],
              }}
            />
            {direction && <DirectionsRenderer directions={direction} />}
          </GoogleMap>
          <div className="map-text">
            <div className="pathway-text">
              <p className="pathway-header">
                Start: {pathway[index].restaurant}
              </p>
              <p>
                Address:{" "}
                {direction.routes && direction.routes[0].legs[0].start_address}
              </p>
            </div>
            <div className="pathway-text">
              <p>Stop: {pathway[index + 1].restaurant}</p>
              <p>
                Address:{" "}
                {direction.routes && direction.routes[0].legs[0].end_address}
              </p>
            </div>
            <ol>
              {direction.routes &&
                direction.routes[0].legs[0].steps.map((step) => {
                  return (
                    <li key={step.encoded_lat_lngs} className="pathway-p">
                      {step.instructions
                        .replace(/<(.*?)>/gi, " ")
                        .replace(/\s\sDestination/gi, ". Destination")}
                    </li>
                  );
                })}
            </ol>
            {direction.routes && console.log(direction.routes[0].legs[0])}
            {index > 0 && (
              <button
                type="button"
                onClick={moveBack}
                className="direction-button back"
              >
                Back
              </button>
            )}
            {index < allPlaces.length - 2 && (
              <button
                type="button"
                onClick={moveForward}
                className="direction-button next"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  return <h1>Loading...</h1>;
};

Pathway.propTypes = {
  allPlaces: PropTypes.arrayOf(
    PropTypes.shape({
      restaurant: PropTypes.string,
      coordinates: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  setButtonClicked: PropTypes.func.isRequired,
};

export default Pathway;
