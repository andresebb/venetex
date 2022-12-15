import React from "react";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HeroAction } from "../components/HeroAction";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroAction />
      <About />
    </div>
  );
};

export default Home;
