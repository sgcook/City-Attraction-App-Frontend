import React, { useState } from "react";
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import "../Styles/direction.css";
import PropTypes from "prop-types";

const Direction = ({ setButtonClicked }) => {
  // const fetchDirection = () => {
  //   const DirectionsService = new window.google.maps.DirectionsService();

  //   DirectionsService.route(
  //     {
  //       origin: { lat: , lng: },
  //       destination: { lat:, lng:  },
  //       travelMode: window.google.maps.TravelMode.WALKING,
  //     },
  //     (result, status) => {
  //       if (status === "OK" && result) {
  //         console.log("ok!");
  //       } else {
  //         console.log("error");
  //       }
  //     }
  //   );
  // };

  return (
    <div className="directions">
      <button
        type="button"
        className="full-directions"
        onClick={() => setButtonClicked(false)}
      >
        Full directions
      </button>
      {/* <GoogleMap zoom={13.5} center={{ lat: originLat, lng: originLng }} /> */}
      <button
        type="button"
        onClick={() => {
          setDirection(back);
        }}
        className="direction-button back"
      >
        Back
      </button>
      <button
        type="button"
        onClick={() => {
          setDirection(next);
        }}
        className="direction-button next"
      >
        Next
      </button>
    </div>
  );
};

Direction.propTypes = {
  setButtonClicked: PropTypes.func.isRequired,
};

export default Direction;
