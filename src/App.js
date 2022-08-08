import React from "react";
import "./Styles/app.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Itinerary from "./Components/Itinerary";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/itinerary" element={<Itinerary />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
