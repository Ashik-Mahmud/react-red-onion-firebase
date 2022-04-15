import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero text-center">
      <div className="container">
        <div className="hero-content">
          <h1>Best Food Waiting for you belly come!!</h1>
          <form action="">
            <div className="input-group">
              <input type="search" placeholder="search" id="search" />
              <button>Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
