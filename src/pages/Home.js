import React from "react";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HeroAction } from "../components/HeroAction";
import { Destinos } from "../components/Destinos";
import { WorkProcess } from "../components/WorkProcess";
import { Counter } from "../components/Counter";
import { Faq } from "../components/Faq";
import { Testimonial } from "../components/Testimonial";

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
      <Testimonial />
    </div>
  );
};

export default Home;
