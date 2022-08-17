/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import EatDrinkForm from "./EatDrinkForm";
import AttractionsForm from "./AttractionsForm";
// import CuisineForm from "./CuisineForm";

const Home = () => {
  const [eatingDrinking, setEatingDrinking] = useState(false);
  const [attractions, setAttractions] = useState(false);
  
  if(!eatingDrinking || !attractions) {
    return (
      <div className="home">
        <div className="home-header">
          <h1>City Tours</h1>
          <h2>Title Placeholder!</h2>
        </div>
          <p>Welcome to City Tours! Where would you like to go?</p>
            <form className="home-form">
            <label htmlFor="home-city">
          <p>I'm going to...</p>
            <select className="home-city" defaultValue={"DEFAULT"}>
              <option value="DEFAULT" disabled>Choose a city</option>
              <option>Birmingham</option>
              <option>Glasgow</option>
              <option>Liverpool</option>
              <option>London</option>
              <option>Manchester</option>
            </select>
            </label>
              <label htmlFor="start-date">
              <p>On...</p>
              <label htmlFor="startdate">
                <input
                  id="startdate"
                  name="startdate"
                  placeholder="DD/MM/YYYY"
                />
              </label>
              </label>
              <p>between...</p>
             <label htmlFor="start-time">
              <select className="start-time">
              <option>00:00</option>
              <option>01:00</option>
              <option>02:00</option>
              <option>03:00</option>
              <option>04:00</option>
              <option>05:00</option>
              <option>06:00</option>
              <option>07:00</option>
              <option>08:00</option>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
              <option>23:00</option>
              <option>24:00</option>
              </select>
            </label>
            <label htmlFor="end-time">
              and
              <select className="end-time">
              <option>00:00</option>
              <option>01:00</option>
              <option>02:00</option>
              <option>03:00</option>
              <option>04:00</option>
              <option>05:00</option>
              <option>06:00</option>
              <option>07:00</option>
              <option>08:00</option>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
              <option>23:00</option>
              <option>24:00</option>
              </select>
            </label>
             <label htmlFor="interest-in">
            <p>I'm interested in...</p>
            Eating/Drinking
           <input type="checkbox" id="eatingdrinking" name="eatingdrinking" onChange={()=> setEatingDrinking(!eatingDrinking)} value="yes"></input>
            <br></br>
            Attractions
          <input type="checkbox" id="attractions" name="attractions" onChange={()=> setAttractions(!attractions)}value="yes"></input>
          <br></br>
          </label>
          {eatingDrinking && (<EatDrinkForm />)}
          {attractions && (<AttractionsForm />)}
          <button type="submit">Go!</button>
        </form>
      </div>
    )}
};

export default Home;