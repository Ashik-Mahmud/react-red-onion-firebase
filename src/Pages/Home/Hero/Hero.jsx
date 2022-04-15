import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero text-center">
      <div className="container">
        <div className="hero-content">
          <h1>Best Food Waiting for you belly come!!</h1>
          <form action="" className="search-wrapper">
            <div className="input-group-custom">
              <input type="search" placeholder="search" id="search" />
              <button className="btn-app">Search</button>
            </div>
            <ul className="search-terms d-flex justify-content-center g-3">
              <li>
                <small>People Search -</small>
              </li>
              <li className="mx-1 cursor-pointer badge bg-danger">Dish</li>
              <li className="mx-1 cursor-pointer badge bg-danger">Lunch</li>
              <li className="mx-1 cursor-pointer badge bg-danger">Dinner</li>
              <li className="mx-1 cursor-pointer badge bg-danger">Breakfast</li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
