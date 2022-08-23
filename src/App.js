/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./Styles/app.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Itinerary from "./Components/Itinerary";
import About from "./Components/About";
import Home from "./Components/Home";

const App = () => {
  const [markers, setMarkers] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');
        </style>
        <Navbar markers={markers} />
      </header>
      <Routes>
        <Route exact path="/" element={<Home setMarkers={setMarkers} />} />
        <Route
          exact
          path="/itinerary"
          element={<Itinerary markers={markers} />}
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
