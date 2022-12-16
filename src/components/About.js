import React from "react";
import "../assets/styles/About.css";

import { FaCheck } from "react-icons/fa";
import background from "../assets/images/background.jpg";
import points from "../assets/images/points.svg";
export const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-image">
          <div className="about-image-container">
            <img src={background} className="about-image" alt="" />
          </div>
          <div className="about-shape">
            <img src={points} alt="" />
          </div>
          <div className="about-experience">
            <h1>3 +</h1>
            <span>Years Of Experience</span>
          </div>
        </div>
        <div className="about-text-container">
          <div className="about-title-container">
            <div className="line-container">
              <div className="line" />
              <h3 className="line-title">ACERCA DE NOSOTROS</h3>
            </div>
            <h2>
              Somos Expertos En
              <span className="yellow-letter"> Soluciones </span>
              De Logistica
            </h2>
            <p className="about-text">
              Somos una empresa puerta a puerta con mas de tantos tres en el
              mercado llevando sonrisas a cada familia bla lorem y luego colocar
              una informacion fictica por aqui.
            </p>
          </div>
          <div className="about-point-container">
            <div className="about-point">
              <FaCheck className="about-check" />
              <p>Entrega garantizada hasta puerta de tu casa.</p>
            </div>
            <div className="about-point">
              <FaCheck className="about-check" />
              <p>Envio comodo y sin preocupaciones</p>
            </div>
            <div className="about-point">
              <FaCheck className="about-check" />
              <p>Distintos metodos para poder procesar tu pago.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
