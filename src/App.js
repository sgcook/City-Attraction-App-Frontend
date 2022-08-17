/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Styles/app.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Itinerary from "./Components/Itinerary";
import About from "./Components/About";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;900&family=Roboto+Mono:wght@200;400;600&family=Roboto+Slab:wght@400;600;900&family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap');
</style>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/itinerary" element={<Itinerary />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
