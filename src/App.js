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
