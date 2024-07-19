import React from "react";
import Hero from "./hero";
import About from "./about";
import Features from "./features";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main>
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default HomePage;
