import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/Hero.css";
import background from "../assets/images/heroVideo.mp4";

import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <>
      <div className="main ">
        <div className="main-overlay" />
        <div>
          <video
            src={background}
            className="main-image"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="main-action animate__flipInX">
          <h3 className="main-name">VENETEX EXPRESS LLC</h3>
          <h1 className="main-slogan animate__flipInX">
            EL SERVICIO DE TRANSPORTE <span>MAS RAPIDO</span> Y GARANTIZADO
          </h1>
          <p className="main-description">
            Realiza con nosotros tu envio puerta a puerta desde Estados Unidos
          </p>
          <div className="main-buttons ">
            <Link className="main-button-uno animate__hinge ">
              <p>CONTACTO</p>
              <div className="main-button-logo">
                <FaArrowRight />
              </div>
            </Link>
            <Link className="main-button-dos animate__hinge">
              <p>CONTACTO</p>
              <div className="main-button-logo">
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
