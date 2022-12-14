import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HeroAction } from "../components/HeroAction";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroAction />
    </div>
  );
};

export default Home;
