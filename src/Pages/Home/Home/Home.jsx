import React from "react";
import About from "../About/About";
import Foods from "../Foods/Foods";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Foods />
      <About />
    </section>
  );
};

export default Home;
