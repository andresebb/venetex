import React from "react";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HeroAction } from "../components/HeroAction";
import { Destinos } from "../components/Destinos";
import { WorkProcess } from "../components/WorkProcess";
import { Counter } from "../components/Counter";
import { Faq } from "../components/Faq";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroAction />
      <About />
      <Destinos />
      <WorkProcess />
      <Counter />
      <Faq />
    </div>
  );
};

export default Home;
