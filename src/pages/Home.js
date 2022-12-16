import React from "react";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HeroAction } from "../components/HeroAction";
import { Destinos } from "../components/Destinos";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroAction />
      <About />
      <Destinos />
    </div>
  );
};

export default Home;
