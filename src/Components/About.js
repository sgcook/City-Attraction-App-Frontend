/* eslint-disable react/no-unescaped-entities */
import React from "react";
import logo1 from "./CityTrek-1.png";
import logo2 from "./CityTrek-2.png";

const About = () => {
  return (
    <div>
      <div className="logo1">
        <img src={logo1} alt="CityTreklogo" height="120" className="logo1" />
      </div>
      <div className="logo2">
        <img src={logo2} alt="CityTreklogo" height="120" className="logo2" />
      </div>
      <div className="about">
        <p>
          Greetings, traveller! CityTrek is an app that plans your walking tour
          of the city, with suggestions for eating, drinking and sightseeing
          thrown in. Tell us where you're going, what you'd like to see, your
          favourite cuisine and how far you'd like to walk, and we'll design
          your perfect day out.
        </p>
      </div>
    </div>
  );
};

export default About;
