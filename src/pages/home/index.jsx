import React from "react";
import Hero from "./sections/Hero";
import AboutProduct from "./sections/AboutProduct";
import AboutInnovator from "./sections/AboutInnovator";
import Showcase from "./sections/Showcase";
import Contact from "./sections/Contact";
import CTA from "./sections/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutProduct />
      <CTA />
      <AboutInnovator />
      <Showcase />
      <Contact />
    </div>
  );
};

export default Home;
