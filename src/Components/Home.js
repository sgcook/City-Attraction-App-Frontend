import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Home</h1>
        <h2>Title Placeholder!</h2>
      </div>
      <p>Welcome to City Tours! Where would you like to go?</p>
      <form className="home-form">
        <label htmlFor="home-city">Select a City</label>
        <select className="home-city" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>Choose a city</option>
          <option>Birmingham</option>
          <option>Glasgow</option>
          <option>Liverpool</option>
          <option>London</option>
          <option>Manchester</option>
        </select>
      </form>
    </div>
  )
};

export default Home;