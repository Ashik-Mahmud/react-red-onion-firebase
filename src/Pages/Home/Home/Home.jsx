import React from "react";
import { auth } from "../../../Firebase/Firebase";
import About from "../About/About";
import Foods from "../Foods/Foods";
import Hero from "../Hero/Hero";

const Home = () => {
  console.log(auth.currentUser);
  return (
    <section className="home">
      <Hero />
      <Foods />
      <About />
    </section>
  );
};

export default Home;
