import React, { useEffect, useState } from "react";
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import "../Styles/pathway.css";
import PropTypes from "prop-types";
import { findAverageCoords } from "../helpers";

const Pathway = ({ allPlaces, setButtonClicked }) => {
  const [averageCoords, setAverageCoords] = useState(null);
  const [direction, setDirection] = useState([]);
  const [index, setIndex] = useState(0);

  let pathway;
  if (allPlaces) {
    pathway = allPlaces;
  }

  useEffect(() => {
    if (pathway) {
      const latCoords = [pathway[index].latitude, pathway[index + 1].longitude];
      const lngCoords = [pathway[index].latitude, pathway[index + 1].longitude];
      setAverageCoords(findAverageCoords(latCoords, lngCoords));
      setDirection([]);
    }
  }, [index, pathway]);

  const fetchDirection = () => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: {
          lat: pathway[index].latitude,
          lng: pathway[index].longitude,
        },
        destination: {
          lat: pathway[index + 1].latitude,
          lng: pathway[index + 1].longitude,
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
              key={[pathway[index].latitude, pathway[index].longitude]}
              position={{
                lat: pathway[index].latitude,
                lng: pathway[index].longitude,
              }}
            />
            <MarkerF
              key={[pathway[index + 1].latitude, pathway[index + 1].longitude]}
              position={{
                lat: pathway[index + 1].latitude,
                lng: pathway[index + 1].longitude,
              }}
            />
            {direction && <DirectionsRenderer directions={direction} />}
          </GoogleMap>
          <div className="map-text">
            <div className="pathway-text">
              <p className="pathway-header">
                <b>Start: </b>
                {pathway[index].place_name}
              </p>
              <p className="pathway-header">
                <b>Address: </b>
                {direction.routes && direction.routes[0].legs[0].start_address}
              </p>
            </div>
            <div className="pathway-text">
              <p className="pathway-header">
                <b>Stop: </b>
                {pathway[index + 1].place_name}
              </p>
              <p className="pathway-header">
                <b>Address: </b>
                {direction.routes && direction.routes[0].legs[0].end_address}
              </p>
              <p className="pathway-header">
                <b>Distance: </b>
                {direction.routes && direction.routes[0].legs[0].distance.text}
              </p>
              <p className="pathway-header">
                <b>Estimated time: </b>
                {direction.routes && direction.routes[0].legs[0].duration.text}
              </p>
            </div>
            <ol className="pathway-ol">
              {direction.routes &&
                direction.routes[0].legs[0].steps.map((step) => {
                  return (
                    <li key={step.encoded_lat_lngs} className="pathway-li">
                      {step.instructions
                        .replace(/<(.*?)>/gi, " ")
                        .replace(/\s\sDestination/gi, ". Destination")}
                    </li>
                  );
                })}
            </ol>
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
